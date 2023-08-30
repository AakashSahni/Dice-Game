var randomNumber1 = Math.random() * 6;
    randomNumber1 = Math.floor(randomNumber1 + 1);

var randomDiceImage = "dice" + randomNumber1 + ".png";  // catenation dice with randome number (dice1.png to dice2.png)

var randomeImageSources = "images/" + randomDiceImage;  // images/dice1.png - images/dice6.

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomeImageSources);

var randomNumber2 = Math.floor( Math.random() * 6 ) + 1;

var randomeImageSources2 = "images/dice" + randomNumber2 + ".png";  // images/dice1.png - images/dice6.

document.querySelectorAll("img")[1].setAttribute("src",randomeImageSources2);

if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML = "Play 1 Won!";
}
else if(randomNumber2 > randomNumber1)
{
    document.querySelector("h1").innerHTML = "2 Play Won!";
}
else{
    document.querySelector("h1").innerHTML = "Draw match";
}