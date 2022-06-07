var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function() {

  //password length alert 
  function invalidNum() {
    passwordLength = Number(window.prompt("Input invalid. Please type a number from 8 - 128", ""));
  
  };
  
  let passwordLength = Number(window.prompt("Type a number for the length of the desired password from 8 - 128 characters.", ""));

  //check if given a number
  if (isNaN(passwordLength)) {
    for (passwordLength; isNaN(passwordLength); ){
      invalidNum();
    }
  }

  //if given length less than 8
  if (8 < passwordLength === false) {
    for (passwordLength; 8 > passwordLength; ) {
      invalidNum();
      if (isNaN(passwordLength)) {
        for (passwordLength; isNaN(passwordLength); ){
          invalidNum();
        }
      }
      if (passwordLength > 128) {
        for (passwordLength; passwordLength > 128; ) {
          invalidNum();
          if (isNaN(passwordLength)) {
          for (passwordLength; isNaN(passwordLength); ){
            invalidNum();
          }
        }}
      }
    }
  }

  //if given length greater than 128
  else if (passwordLength > 128) {
    for (passwordLength; passwordLength > 128; ) {
      invalidNum();
      if (isNaN(passwordLength)) {
        for (passwordLength; isNaN(passwordLength); ){
          invalidNum();
        }
      }
      if (passwordLength < 8) {
        for (passwordLength; 8 > passwordLength; ) {
          invalidNum();
          if (isNaN(passwordLength)) {
          for (passwordLength; isNaN(passwordLength); ){
            invalidNum();
          }
        }}
      }
    }
  }

  alert("You will be given prompts to decide your password criteria: lowercase, uppercase, numeric, and/or special characters. Type 'yes' to at least one criteria.");

  //var isYesOrNo is used to check if user input 'yes' or 'no'
  var isYesOrNo = false;
  var result = "";
  var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var specialChar = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";

  //function to loop prompts for criteria 
  function criteriaPrompts(){

  let passwordLowercase = prompt("Do you want your code to contain lowercase letters? Type 'yes' or 'no'.");

  funcLowercase();

  if (isYesOrNo === false) {
    for (isYesOrNo; isYesOrNo === false; ) {
      passwordLowercase = prompt("Input invalid. Please type 'yes' or 'no' for lowercase letters.")
      funcLowercase();
    }
  }

  //function to determine to include lowercase
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
      passwordUppercase = prompt("Input invalid. Please type 'yes' or 'no' for uppercase letters.")
      funcUppercase();
    }
  }

  //function to determine to include uppercase
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
      passwordNumeric = prompt("Input invalid. Please type 'yes' or 'no' for numbers.")
      funcNumeric();
    }
  }

  //function to determine to include numbers
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
      passwordSpecialChar = prompt("Input invalid. Please type 'yes' or 'no' for special characters.")
      funcSpecialChar();
    }
  }

  //function to determine to include special characters
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

  //to determine if user has at least one criteria (yes)
  for(let i = 0; i < criteria.length; i++) {
    if (criteria[i]) {
      atLeastOne = true;
    }
  }
  
  //generate password with conditions met
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
  }
  
  //loop criteria prompts until user inputs yes for at least one
  else {
    alert("Please type 'yes' for at least one criteria.");
    criteriaPrompts();
  }}

  criteriaPrompts();

  console.log(result);
  alert("Your password: " + result);
  password.textContent = "Your password: " + result;
});