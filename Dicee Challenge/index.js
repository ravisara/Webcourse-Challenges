var randomNumber1;
randomNumber1 = Math.floor(Math.random() * 6) + 1;
var leftImageFullPath = "images/dice" + randomNumber1 + ".png"
document.querySelectorAll("img")[0].setAttribute("src", leftImageFullPath);

var randomNumber2;
randomNumber2 = Math.floor(Math.random() * 6) + 1;
var rightImageFullPath = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", rightImageFullPath);


var resultText;
if (randomNumber1 > randomNumber2) {
  resultText = "🚩 Player 1 Wins!"
} else if (randomNumber1 < randomNumber2) {
  resultText = "Player 2 Wins! 🚩"
} else {
  resultText = "Draw"
}

document.querySelector("h1").innerHTML = resultText;
