// initializes a global empty string variable to hold password
var password = "";
var generateBtn = document.querySelector("#generate");
function writePassword () {
  // strings that hold strings of each character type
  var upCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowCase = "abcdefghijklmnopqrstuvwxyz";
  var number = "1234567890";
  var special = "!@#$%&*"
  // prompts that allow user to choose which character types to include
  var uCase = window.confirm("Do you want Uppercase?");
  var lCase = window.confirm("Do you want lowercase?");
  var num = window.confirm("Do youy want numbers?");
  var specChar = window.confirm("Do you want special characters?");
  // empty string that will hold desired characters
  var charList ="";
  // this will add a character string to the desired charcter string if its selected by the user
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
  // prompts the user to input desired password length and stores it as a variable.
  var lengthChoice = window.prompt("Enter a password length 8-128 characters.");
  // checks that user input is valid and not blank
  if (lengthChoice >= 8 && lengthChoice <= 128 && charList != "") {
    // adds one character per loop. Number of loops is set to the user input variable 'lengthChoice'
    for (var i = 0; i <= lengthChoice; i++) {
      // adds a random character to the current 'password' string each loop
      password = password + charList.charAt(Math.floor(Math.random() * Math.floor(charList.length - 1)));
    }
  }
  // if user input is not valid, error message is displayed
  else {
    window.alert("Invalid response. Please try again.");
  }
  // displays the generated password in the textbox created in the html file
  document.getElementById("password").value = password;
};
// listens for click on button to run the function that generates a password
generateBtn.addEventListener("click", writePassword);
