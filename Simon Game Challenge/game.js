var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
//                    0      1       2        3
var gameStarted = false

var level = 0;

$(document).keypress(function() {

  if (!gameStarted) {
    nextSequence();
    gameStarted = true
  }

});

$(".btn").click(function() {

  var idOfTheButtonClickedOn = $(this).attr("id") // would be one of "red", "blue", "green" or "yellow"

  playSound(idOfTheButtonClickedOn);

  animatePress(idOfTheButtonClickedOn);

  userClickedPattern.push(idOfTheButtonClickedOn);

  if (userClickedPattern.length == gamePattern.length) { // This means the user has clicked on the buttons as many times as the game pattern flashed the buttons.
    // e.g. If the user has pressed red, green, red, yellow, the index of the last answer is 3.
    // blue, blue, green, red
    // find the index of the user's last answer
    var theIndexOfLastAnswer = 0
    for(i=0; i < buttonColours.length; i++) {
      if(idOfTheButtonClickedOn == buttonColours[i]) {
        theIndexOfLastAnswer = i;
        break;
      }
    }
    checkAnswer(theIndexOfLastAnswer) // If three values are in the array, the size is 3 but the index of the last element is 2
  }

})

function nextSequence() {

  level++;
  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);

  var randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100)
  playSound(randomChosenColour);

}

function playSound(name) {

  var soundToPlay = new Audio('sounds/' + name + '.mp3');
  soundToPlay.play();

}

function animatePress(currentColour) {

  $("#" + currentColour).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColour).removeClass("pressed");
  }, 100);

}

function checkAnswer(currentLevel) {

  if (gamePattern[gamePattern.length - 1] == buttonColours[currentLevel]) {
    console.log("success");
    //Check if the user has finished his nextSequence
    if (gamePattern.length === userClickedPattern.length) { // User has clicked on as many times as the game pattern sequence length
        setTimeout(function() {
          nextSequence();
          userClickedPattern = [] // makes the array empty again. https://stackoverflow.com/questions/1232040/how-do-i-empty-an-array-in-javascript
        }, 1000)
    }

  } else {
    console.log("wrong");
  }

}
