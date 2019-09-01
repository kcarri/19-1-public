/*KC IMED
Fall2019*/

var integer = 45.678;
var string = "To hold infinity in the palm of your hand.";
var waterIsWet = true;
var theImpossibleQuestion = null;
var lesserValue;

var a = 6;
var b = 10;
var c = 4;

var sum = a + b;
var subtraction = a - b;
var multiplication = a * b;
var division = a / b;
var result = (a * b) + c;

//If statement!
if (waterIsWet == true) {
  // Then we do something here.
  theSkyIsBlue = true;
  document.write("The Sky is Blue");
} else {
  //Do an alternative here.
  theSkyIsBlue = false;
}

//"Choose a number" function using Prompt
function myFunction() {
  var text;
  var number = prompt("Choose a number between 1 and 3!", "1");
  switch (number) {
    case "1":
      text = "This little piggy went to market.";
      break;
    case "2":
      text = "This little piggy stayed home.";
      break;
    case "3":
      text = "This little piggy was arrested for illegal possession of a firearm.";
      break;
    default:
      text = "Hey, stop that."
  }
  document.getElementById("question").innerHTML = text;
}


console.log(theSkyIsBlue);
