// Assignment code here

var specialChars = ["!","@","#","$","%","^","&","*","-","+","?"]
var lowercaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var uppercaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var possibleChars = []
var password = []

// Ask for requirements
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
    PasswordLength: promptPasswordLength,
    hasLowercaseLetters: confirmLowercaseLetters,
    hasUppercaseLetters: confirmUppercaseLetters,
    hasNumeric: confirmNumeric,
    hasSpecialChars: confirmSpecialChars,
  };
  return passwordEntries;
};

// Generate password
function generatePassword() {
  var requirements = getRequirements();
  var everyCharacterSelected = []

  if (requirements.hasLowercaseLetters) {
    possibleChars = possibleChars.concat(lowercaseLetters);
    everyCharacterSelected.push(getRandom(lowercaseLetters))
  }

  if (requirements.hasUppercaseLetters) {
    possibleChars = possibleChars.concat(uppercaseLetters);
    everyCharacterSelected.push(getRandom(uppercaseLetters))
  }

  if (requirements.hasNumeric) {
    possibleChars = possibleChars.concat(numeric);
    everyCharacterSelected.push(getRandom(numeric))
  }

  if (requirements.hasSpecialChars) {
    possibleChars = possibleChars.concat(specialChars);
    everyCharacterSelected.push(getRandom(specialChars))
  }
  // for loop to get random characters from possibleChars
  for (var i = 0; i < requirements.PasswordLength; i++) {
    var randomPassword = getRandom(possibleChars);
    password.push(randomPassword)
  }

  for(var i=0; i < everyCharacterSelected.length; i++) {
    password[i] = everyCharacterSelected[i];
  }
  
  var finalPassword = password.join("");
  console.log(finalPassword);
  return finalPassword;

  function getRandom(arr) {
    var random = Math.floor(Math.random() * arr.length)
    return arr[random]
  }
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
