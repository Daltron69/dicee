var randomNumber1= Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);



var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceImage1);


var randomNumber2= Math.floor(Math.random() * 6) + 1;
console.log(randomNumber2);

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomDiceImage2);



/*
if (randomNumber1 < 2) {
  document.querySelector(".img1").setAttribute("src", "https://static.thenounproject.com/png/2502952-200.png");
  console.log()
}

else if (randomNumber1 < 3) {
  document.querySelector(".img1").setAttribute("src", "https://steamuserimages-a.akamaihd.net/ugc/279604015251473240/F1F44C4E5DAFD83D452BB22C8088FBAB02335ED7/?imw=268&imh=268&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true");
  console.log()
}
else if (randomNumber1 < 4) {
  document.querySelector(".img1").setAttribute("src", "https://www.clker.com/cliparts/M/e/P/O/L/b/dice-3.svg");
  console.log()
}
else if (randomNumber1 < 5) {
  document.querySelector(".img1").setAttribute("src", "https://img.favpng.com/1/19/24/dice-four-sided-die-game-clip-art-png-favpng-34dfib7rK9tG8Ape8x4PqqvF8.jpg");
  console.log()
}
else if (randomNumber1 < 6) {
  document.querySelector(".img1").setAttribute("src", "https://static.thenounproject.com/png/2502956-200.png");
  console.log()
}




if (randomNumber2 < 2) {
  document.querySelector(".img2").setAttribute("src", "https://static.thenounproject.com/png/2502952-200.png");
  console.log()
}

else if (randomNumber2 < 3) {
  document.querySelector(".img2").setAttribute("src", "https://steamuserimages-a.akamaihd.net/ugc/279604015251473240/F1F44C4E5DAFD83D452BB22C8088FBAB02335ED7/?imw=268&imh=268&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true");
  console.log()
}
else if (randomNumber2 < 4) {
  document.querySelector(".img2").setAttribute("src", "https://www.clker.com/cliparts/M/e/P/O/L/b/dice-3.svg");
  console.log()
}
else if (randomNumber2 < 5) {
  document.querySelector(".img2").setAttribute("src", "https://img.favpng.com/1/19/24/dice-four-sided-die-game-clip-art-png-favpng-34dfib7rK9tG8Ape8x4PqqvF8.jpg");
  console.log()
}
else if (randomNumber2 < 6) {
  document.querySelector(".img2").setAttribute("src", "https://static.thenounproject.com/png/2502956-200.png");
  console.log()
}
*/

if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 wins!"
}

else if (randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 wins!"
}

else{
  document.querySelector("h1").innerHTML = "Draw!"
}
