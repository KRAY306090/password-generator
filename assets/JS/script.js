// Assignment code here
var upCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowCase = "abcdefghijklmnopqrstuvwxyz";
var number = "1234567890";
var special = "!@#$%&*"

var uCase = window.confirm("Do you want Uppercase?");
var lCase = window.confirm("Do you want lowercase?");
var num = window.confirm("Do youy want numbers?");
var specChar = window.confirm("Do you want special characters?");

var charList ="";

if (uCase) {
    charList = charList + upCase;
}

if (lCase) {
  charList = charList +lowCase;
}

if (num) {
  charList = charList + number;
}

if (specChar) {
  charList = charList + special;
}

console.log(charList);

var lengthChoice = window.prompt("Enter a password length 8-128 characters.");
if (lengthChoice >= 8 && lengthChoice <= 128) {
  window.alert("Thank you! See your password below");
}
else {
  window.alert("Invalid response. Please try again.");
}




// Get references to the #generate element
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;

//}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);