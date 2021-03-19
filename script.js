// Assignment Code
var generateBtn = document.querySelector("#generate");
//Lower case character array
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
//Upper case character array
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
//Numeric character array
const numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//Special character array
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
//Declaring generate password function and variables
function generatePassword() {
  let isLowerCaseCharacters;
  let isUpperCaseCharacters;
  let isNumericCharacters;
  let isSpecialCharacters;
  let optionsArray = [];
  let password = [];
  const result = [];

  // Asking the user their desired password length
  let passwordLength = prompt(
    "How many characters would you like in your password? Passwords must be at least 8 characters, but no more than 128 characters."
  );
  // Converts user-defined password length string into a number
  passwordLength = Number.parseInt(passwordLength);

  // If the user password length is less than 8 characters, an alert shows and an empty string is returned.
  if (passwordLength < 8) {
    alert("Your password must have more than 7 characters");
  }
  // If the user password length is more than 128 characters, an alert shows and an empty string is returned.
  if (passwordLength > 128) {
    alert("Your password can have no more than 128 characters");
  }
  // If the user presses cancel on the password length prompt dialogue box, then the following alert is displayed.
  if (!passwordLength) {
    alert("You must specify a password length");
  }
  // If the user's password length is between 8 and 128 characters, this requested password length is logged to the console.
  if (passwordLength >= 8 && passwordLength <= 128) {
    //Using confirm dialogue boxes to ask  user about the character types they would like to include in their password.
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
  // If the character type is selected then items from that array will be pushed into an options array.
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
  //If no character types are selected an alert dialogue box will show and say that the user must select at least 1 character type.
  if (
    !isLowerCaseCharacters &&
    !isUpperCaseCharacters &&
    !isNumericCharacters &&
    !isSpecialCharacters
  ) {
    alert("You must select at least one character type");
  }

  console.log(optionsArray);
  //Using math random math floor to generate a random password, based on the password length and user-defined character choice:
  function randomPasswordGenerator() {
    const randomIndex = Math.floor(Math.random() * optionsArray.length);
    const randomChoice = optionsArray[randomIndex];

    return randomChoice;
  }
  //Repeating the above process, until the number of random results equals the requested password length.
  for (let i = 0; i < passwordLength; i++) {
    let randomResult = randomPasswordGenerator();
    result.push(randomResult);
  }
  console.log(result);
  //These random result characters are then joined.
  password = result.join("");
  //The password is returned.
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
