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

  var colourOfButtonPressed = $(this).attr("id") // would be one of "red", "blue", "green" or "yellow"
  userClickedPattern.push(colourOfButtonPressed);
  playSound(colourOfButtonPressed);
  animatePress(colourOfButtonPressed);

  checkAnswer(userClickedPattern.length - 1) // index of the last answer in the user's sequence.

})

function nextSequence() {

  userClickedPattern = [];
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

  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log("success")
    if (userClickedPattern.length === gamePattern.length) { // user has finished the sequence
      setTimeout(nextSequence, 1000);
    }
  } else {
    console.log("wrong");
    doNeedfulWhenAnswerIsWrong();
  }

}

function doNeedfulWhenAnswerIsWrong() {

  playSound("wrong");

  $("body").addClass("game-over");
  setTimeout(function() {$("body").removeClass("game-over")}, 200);

  $("#level-title").text("Game Over, Press Any Key to Restart");

}
