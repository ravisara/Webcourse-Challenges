var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];

$(".btn").click(function() {
  var idOfTheButtonClickedOn = $(this).attr("id")
  playSound(idOfTheButtonClickedOn);
})

function nextSequence() {

  var randomNumber = Math.floor(Math.random() * 4);

  var randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeOut(100).fadeIn(100) //.fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);

}

function playSound(name) {

  var soundToPlay = new Audio('sounds/' + name + '.mp3');
  soundToPlay.play();

}
