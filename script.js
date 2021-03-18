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

function generatePassword() {
  let isLowerCaseCharacters;
  let isUpperCaseCharacters;
  let isNumericCharacters;
  let isSpecialCharacters;
  let optionsArray = [];
  let password = [];
  const result = [];

  // Declare a new function on line 3

  // Asking the user their desired password length
  let passwordLength = prompt(
    "How many characters would you like in your password? Passwords must be at least 8 characters, but no more than 128 characters."
  );
  // Converts user-defined password length string into a number
  passwordLength = Number.parseInt(passwordLength);

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
    isLowerCaseCharacters = confirm(
      "Would you like to include lower case characters in your password?"
    );
    isUpperCaseCharacters = confirm(
      "Would you like to include upper case characters in your password?"
    );
    isNumericCharacters = confirm(
      "Would you like to include numeric characters in your password?"
    );
    isSpecialCharacters = confirm(
      "Would you like to include special characters in your password?"
    );
  }
  // Creating if statements from the requested character types to generate password.
  if (isLowerCaseCharacters) {
    optionsArray.push(...lowerCaseArray);
  }
  if (isUpperCaseCharacters) {
    optionsArray.push(...upperCaseArray);
  }
  if (isNumericCharacters) {
    optionsArray.push(...numbersArray);
  }
  if (isSpecialCharacters) {
    optionsArray.push(...specialCharactersArray);
  }

  console.log(optionsArray);
  //Using math random math floor to generate a random password, based on the password length and user-defined character choice:
  function randomPasswordGenerator() {
    const randomIndex = Math.floor(Math.random() * optionsArray.length);
    const randomChoice = optionsArray[randomIndex];
    //const randomCharacter = Math.floor(Math.random() * randomChoice.length);
    return randomChoice;
  }

  for (let i = 0; i < passwordLength; i++) {
    let randomResult = randomPasswordGenerator();
    result.push(randomResult);
  }
  console.log(result);

  password = result.join("");

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
