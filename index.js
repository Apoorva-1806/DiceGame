//Changing the image of first dice
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage1 = "../DiceGame/images/dice" + randomNumber1 + ".png";
var img1 = document.querySelector(".img1");
img1.setAttribute("src", randomDiceImage1);


//Changing the image of second dice
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "../DiceGame/images/dice" + randomNumber2 + ".png";
var img2 = document.querySelector(".img2");
img2.setAttribute("src",randomDiceImage2);


//Changing headign according to the winner
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins";
} else {
    document.querySelector("h1").innerHTML = "Draw";
}

const roll = document.getElementById("newRoll");
roll.addEventListener("click", function() {
    location.reload();
})