var numberOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrums; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    var theLetterOfTheKey = this.innerHTML
    playSoundDependentOnInput(theLetterOfTheKey);
    buttonAnimation(theLetterOfTheKey);
  });
}

document.addEventListener("keydown", function(event) {
  playSoundDependentOnInput(event.key);
  buttonAnimation(event.key);
})

function playSoundDependentOnInput(theCharacter) {

  switch (theCharacter) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    case "j":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case "k":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;
    case "l":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    default:
  }

}

function buttonAnimation(theKey) {

  var theButton = document.querySelector("." + theKey);
  theButton.classList.add("pressed");

  setTimeout(function() {theButton.classList.remove("pressed")}, 100)

}

// function playSound() {
//   var myAudio = new Audio('sounds/tom-1.mp3');
//   myAudio.play();
// }
