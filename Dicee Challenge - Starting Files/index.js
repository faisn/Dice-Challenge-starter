// Player 1 dice
let randomNumber1 = Math.floor(Math.random() * 6) + 1;

let randomDiceImage = "dice" + randomNumber1 + ".png";

let randomImageSource = "images/" + randomDiceImage;

let image1 = document.querySelectorAll('img')[0];

image1.setAttribute('src', randomImageSource);

// player 2 dice
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll('img')[1].setAttribute('src', randomDiceImage2);

if (randomNumber1 > randomNumber2) {
  document.querySelector('h1').innerHTML = "🚩Player 1 WON!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector('h1').innerHTML = "🚩Player 2 WON!";
} else {
  document.querySelector("h1").innerHTML = "DRAW!";
}