// Assignment code here

var specialChars = ["!","@","#","$","%","^","&","*","-","+","?"]
var lowercaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var uppercaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var possibleChars = [""]

//ask for requirements
function getRequirements() {
  var promptPasswordLength = window.prompt("How long would you like your password? Please select a number between 8 and 128.");
  localStorage.setItem("passwordLength", promptPasswordLength)
  if (promptPasswordLength < 8 || promptPasswordLength > 128) {
    window.alert("You must enter a number between 8 and 128.");
    return getRequirements();
  };
  if (promptPasswordLength === "" || promptPasswordLength === null) {
    window.alert("You must enter a number between 8 and 128.");
    return getRequirements();
  };
  console.log(promptPasswordLength);
  
  var confirmLowercaseLetters = window.confirm("Would you like to include lowercase letters?");
  console.log(confirmLowercaseLetters);
  
  var confirmUppercaseLetters = window.confirm("Would you like to include uppercase letters?");
  console.log(confirmUppercaseLetters);
  
  var confirmNumeric = window.confirm("Would you like to include numbers?")
  console.log(confirmNumeric);
  
  var confirmSpecialChars = window.confirm("Would you like to include special characters?")
  console.log(confirmSpecialChars);

  if (confirmLowercaseLetters === false && confirmUppercaseLetters === false && confirmNumeric === false && confirmSpecialChars === false) {
    window.alert("You must select at least one character type.");

    return getRequirements();
  }

  // object with all password requirements
  var passwordEntries = {
    promptPasswordLength: promptPasswordLength,
    confirmLowercaseLetters: confirmLowercaseLetters,
    confirmUppercaseLetters: confirmUppercaseLetters,
    confirmNumeric: confirmNumeric,
    confirmSpecialChars: confirmSpecialChars,
  };
  return passwordEntries;
};

//generate password
function generatePassword() {
  var requirements = getRequirements();

  if (requirements.confirmLowercaseLetters) {
    possibleChars = possibleChars.concat(lowercaseLetters);
  }

  if (requirements.confirmUppercaseLetters) {
    possibleChars = possibleChars.concat(uppercaseLetters);
  }

  if (requirements.confirmNumeric) {
    possibleChars = possibleChars.concat(numeric)
  }

  if (requirements.confirmSpecialChars) {
    possibleChars = possibleChars.concat(specialChars)
  }
  //TODO: LEFT OFF HERE
  for (var i = 0; i < requirements.promptPasswordLength; i++) {
    var randomPassword = Math.floor(Math.random() * possibleChars.length);
    password += possibleChars.substring(randomPassword, randomPassword +1);
  }
  console.log(password);
};

// function getRandom(arr) {
//   console.log(randomPassword)  
// }

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page