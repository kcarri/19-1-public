/*KC IMED
Fall2019*/


//Translating classes
let container = document.querySelector(".container");
let containerLeft = false;
let result = document.querySelector(".result");
let btn = document.querySelector(".mainClass");
let redBtn = document.querySelector(".redBtn");
let blueBtn = document.querySelector(".blueBtn");
let yellowBtn = document.querySelector(".yellowBtn");
let orangeBtn = document.querySelector(".orangeBtn");

container.style.border = "thin dotted red";



function displayDate(e) {
  e.preventDefault();
  result.innerHTML = "The time is currently: " + Date();
}

function containerShift() {
  if (containerLeft == false) {
    container.style.border = "thick solid black";
    containerLeft == true;
  }
}

btn.onclick = containerShift;

btn.addEventListener("click", displayDate);
btn.addEventListener("click", containerShift);


function mouseOvered() {
  redBtn.style.backgroundColor = "red";
}

function blueClick() {
  blueBtn.style.backgroundColor = "blue";
}

function yellowLoad() {
  yellowBtn.style.backgroundColor = "yellow";
}

function orangeSurprise() {
  orangeBtn.style.backgroundColor = "orange";
  alert("Orange you glad you can read this alert?");
}

redBtn.addEventListener("mouseover", mouseOvered);
blueBtn.addEventListener("click", blueClick);
yellowBtn.addEventListener("dblclick", yellowLoad);
