var _ = require('lodash');
console.log(_);

var array = [1, 2, 3, 4, 5];
console.log('answer: ' + _.without(array, 2));

var h3 = document.querySelector("h3");
var color1 = document.querySelector(".color1")
var color2 = document.querySelector(".color2")
var body = document.getElementById("gradient");
var randomGenerator = document.getElementById("random");
function setBackgroundColor(){
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    h3.innerText = body.style.background + ";";
}

function getRandomColor(){
    var letters = '0123456789ABCDEF';
    var color = "#";
    for(var i = 0; i < 6; i++){
        var randIndex = Math.floor(Math.random() * 16);
        color += letters[randIndex];
    }
    return color;
}

function pickRandomColors(){
    var val1 = getRandomColor();    
    var val2 = getRandomColor();
    color1.value = val1; 
    color2.value = val2;
    setBackgroundColor();
}

color1.addEventListener("input", setBackgroundColor);   

color2.addEventListener("input", setBackgroundColor);

randomGenerator.addEventListener("click", pickRandomColors);