               // image1

let randomNumber1 = Math.floor(Math.random() * 6) + 1;

let randomDiceImage1 = "images/dice" + randomNumber1 + ".png";

let image1 = document.querySelector(".img1");
image1.setAttribute("src", randomDiceImage1);

              // image 2

let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

let image2 = document.querySelector(".img2");
image2.setAttribute("src", randomDiceImage2);

            // end

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
