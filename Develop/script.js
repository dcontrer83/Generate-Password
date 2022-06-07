// Assignment Code

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);

generateBtn.addEventListener("click", function() {
  let passwordLength = Number(window.prompt("Type a number for the length of the desired password from 8 - 128 characters.", ""));

  if (isNaN(passwordLength)) {
    for (passwordLength; isNaN(passwordLength); ){
      passwordLength = Number(window.prompt("Please type a number from 8 - 128", ""));
    }
  }

  if (8 <= passwordLength === false) {
    for (passwordLength; 8 > passwordLength; ) {
      passwordLength = Number(window.prompt("Please type a number from 8 - 128", ""));
      if (isNaN(passwordLength)) {
        for (passwordLength; isNaN(passwordLength); ){
          passwordLength = Number(window.prompt("Please type a number from 8 - 128", ""));
        }
      }
      if (passwordLength > 128) {
        for (passwordLength; passwordLength > 128; ) {
        passwordLength = Number(window.prompt("Please type a number from 8 - 128", ""));
        if (isNaN(passwordLength)) {
          for (passwordLength; isNaN(passwordLength); ){
            passwordLength = Number(window.prompt("Please type a number from 8 - 128", ""));
          }
        }}
      }
    }
  }

  else if (passwordLength > 128) {
    for (passwordLength; passwordLength > 128; ) {
      passwordLength = Number(window.prompt("Please type a number from 8 - 128", ""));
      if (isNaN(passwordLength)) {
        for (passwordLength; isNaN(passwordLength); ){
          passwordLength = Number(window.prompt("Please type a number from 8 - 128", ""));
        }
      }
      if (passwordLength < 8) {
        for (passwordLength; 8 > passwordLength; ) {
        passwordLength = Number(window.prompt("Please type a number from 8 - 128", ""));
        if (isNaN(passwordLength)) {
          for (passwordLength; isNaN(passwordLength); ){
            passwordLength = Number(window.prompt("Please type a number from 8 - 128", ""));
          }
        }}
      }
    }
  }

  alert("You will be given prompts to decide your password criteria: lowercase, uppercase, numeric, and/or special characters. Type 'yes' to at least one criteria.");

  var isYesOrNo = false;
  var result = "";
  var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var specialChar = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";

  function criteriaPrompts(){


  let passwordLowercase = prompt("Do you want your code to contain lowercase letters? Type 'yes' or 'no'.");

  funcLowercase();

  if (isYesOrNo === false) {
    for (isYesOrNo; isYesOrNo === false; ) {
      passwordLowercase = prompt("Please type 'yes' or 'no' for lowercase letters.")
      funcLowercase();
    }
  }

  function funcLowercase () {
  if (passwordLowercase === "yes") {
    passwordLowercase = true;
    isYesOrNo = true;

  }
  else if (passwordLowercase === "no") {
    passwordLowercase = false; 
    isYesOrNo = true;
  }}

  let passwordUppercase = prompt("Do you want your code to contain uppercase letters? Type 'yes' or 'no'.");

  isYesOrNo = false;
  funcUppercase();

  if (isYesOrNo === false) {
    for (isYesOrNo; isYesOrNo === false; ) {
      passwordUppercase = prompt("Please type 'yes' or 'no' for uppercase letters.")
      funcUppercase();
    }
  }

  function funcUppercase () {
  if (passwordUppercase === "yes") {
    passwordUppercase = true;
    isYesOrNo = true;

  }
  else if (passwordUppercase === "no") {
    passwordUppercase = false; 
    isYesOrNo = true;
  }}

  let passwordNumeric = prompt("Do you want your code to contain numbers? Type 'yes' or 'no'.");

  isYesOrNo = false;
  funcNumeric();

  if (isYesOrNo === false) {
    for (isYesOrNo; isYesOrNo === false; ) {
      passwordNumeric = prompt("Please type 'yes' or 'no' for numbers.")
      funcNumeric();
    }
  }

  function funcNumeric () {
  if (passwordNumeric === "yes") {
    passwordNumeric = true;
    isYesOrNo = true;

  }
  else if (passwordNumeric === "no") {
    passwordNumeric = false; 
    isYesOrNo = true;
  }}

  let passwordSpecialChar = prompt("Do you want your code to contain special characters? Type 'yes' or 'no'.");

  isYesOrNo = false;
  funcSpecialChar();

  if (isYesOrNo === false) {
    for (isYesOrNo; isYesOrNo === false; ) {
      passwordSpecialChar = prompt("Please type 'yes' or 'no' for special characters.")
      funcSpecialChar();
    }
  }

  function funcSpecialChar () {
  if (passwordSpecialChar === "yes") {
    passwordSpecialChar= true;
    isYesOrNo = true;

  }
  else if (passwordSpecialChar === "no") {
    passwordSpecialChar = false; 
    isYesOrNo = true;
  }}

  var criteria = [passwordLowercase, passwordUppercase, passwordNumeric, passwordSpecialChar];
  var criteriaChar = [lowercaseLetters, uppercaseLetters, numbers, specialChar];
  var atLeastOne = false;
  var criteriaInclude = "";

  for(let i = 0; i < criteria.length; i++) {
    if (criteria[i]) {
      atLeastOne = true;
    }
  }
  
  if(atLeastOne) {
    for (let i = 0; i < criteria.length; i++){
      if (criteria[i]) {
        criteriaInclude = criteriaInclude.concat(criteriaChar[i]);
      }
    }
    for (let i = 0; i < passwordLength; i++) {
      result += criteriaInclude.charAt(Math.floor(Math.random() * criteriaInclude.length));
    }
    return result;
    //console.log(criteriaInclude);
  }
  
  else {
    alert("Please type 'yes' for at least on criteria.");
    criteriaPrompts();
  }}

  criteriaPrompts();

  console.log(result);
  alert("Your password: " + result);
  password.textContent = "Your password: " + result;
});

//passwordLength stored :D
//passwordLowerscase stored :D
//passwordUppercase stored :D
//passworeNumeric stored :D
//passwrodSpecialChar stored :D
