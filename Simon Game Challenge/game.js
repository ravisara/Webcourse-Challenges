var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
//                    0      1       2        3
var gameStarted = false

var level = 0;

displayGamePlayInstructions();

$(document).keypress(function() {

  if (!gameStarted) {
    clearGamePlayInstructions();
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

  $("#additional-info").text("Game over. Waiting for 15 seconds for you to capture a screenshot of your level to show others.");

  setTimeout(startOver, 5000);

}

function startOver() {

  $("#level-title").text("Game Over, Press Any Key to Restart");
  //displayGamePlayInstructions();
  level = 0;
  gamePattern = [];
  gameStarted = false;
  clearGamePlayInstructions();
}

function clearGamePlayInstructions() {
    $("#additional-info").text("");
}

function displayGamePlayInstructions() {
  $("#additional-info").text("When a button flashes click on it. If you click on the same button that flashed, one of the four buttons will flash once again. Now click on the 1st button that flashed followed by the 2nd button that flashed from memory. Then one of the buttons will flash once again. Click on three buttons in the aforementioned way. It will go on like this challenging you to remember an ever increasing sequence.");
}
