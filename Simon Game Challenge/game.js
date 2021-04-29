var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var gameStarted = false

var level = 0;

$(document).keypress(function() {

  if (!gameStarted) {
    nextSequence();
    gameStarted = true
  }

});

$(".btn").click(function() {

  var idOfTheButtonClickedOn = $(this).attr("id")

  playSound(idOfTheButtonClickedOn);

  animatePress(idOfTheButtonClickedOn);

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

}
