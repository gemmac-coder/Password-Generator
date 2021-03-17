// Assignment Code
var generateBtn = document.querySelector("#generate");

const lowerCaseArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const upperCaseArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const specialCharactersArray = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Declare a new function on line 3
function generatePassword() {
  // Asking the user their desired password length
  var passwordLength = prompt(
    "How many characters would you like in your password? Passwords must be at least 8 characters, but no more than 128 characters."
  );
  // Converts user-defined password length string into a number
  PasswordLength = Number.parseInt(passwordLength);

  //Checking to see if password length is valid

  // If the user password length is less than 8 characters, an alert shows and an empty string is returned.
  if (passwordLength < 8) {
    alert("Your password must have more than 7 characters");
  }
  // If the user password length is more than 128 characters, an alert shows and an empty string is returned.
  if (passwordLength > 128) {
    alert("Your password can have no more than 128 characters");
  }
  // If the user's password length is between 8 and 128 characters, this requested password length is logged to the console.
  if (passwordLength >= 8 && passwordLength <= 128) {
    //Asking the user about the character types they would like to include in their password.
    const lowerCaseCharacters = confirm(
      "Would you like to include lower case characters in your password?"
    );
    const upperCaseCharacters = confirm(
      "Would you like to include upper case characters in your password?"
    );
    const numericCharacters = confirm(
      "Would you like to include numeric characters in your password?"
    );
    const specialCharacters = confirm(
      "Would you like to include special characters in your password?"
    );
    // Creating if statements from the requested character types to generate password.
    if (lowerCaseCharacters) {
      optionsArray.push(lowerCaseArray);
    }
    if (upperCaseCharacters) {
      optionsArray.push(upperCaseArray);
    }
    if (numericCharacters) {
      optionsArray.push(numbersArray);
    }
    if (specialCharacters) {
      optionsArray.push(specialCharactersArray);
    }
    //Creating an options array, based on the character types selected by the user.
    var optionsArray = [];
  }
  //Using math random math floor to generate a randomPasswordArray based on the password length:
  var randomPasswordArray =
    optionsArray[Math.floor(Math.random() * passwordLength)];
  var stringPassword = randomPasswordArray.toString();
  console.log(stringPassword);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
