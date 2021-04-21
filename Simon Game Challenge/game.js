var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];

animatePress("green");

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

function animatePress(currentColour) {
  $(".btn").click(function() {
      var theButton = $(this);
      $(this).addClass("pressed");
      setTimeout(function() {
        theButton.removeClass("pressed")
      }, 100);
    }
  )


}
