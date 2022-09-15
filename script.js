// Global variables
var numOfChars;
var useLowerCaseLtrs;
var useUpperCaseLtrs;
var useNumChars;
var useSpecialChars;


// When user clicks the Generate Password button


// A prompt box appears


// Ask user how many characters (between 8-128)
function howManyCharacters(){
  numOfCharacters = parseInt( prompt("How many characters?") );
}


// Ask user if using lowercase characters
function useLowerCase(){ 
  useLowerCaseLtrs = confirm("Do you want lower case letters in the password?");
  console.log(useLowerCaseLtrs);
}


// Ask user if using uppercase characters
function useUpperCase(){
  useUpperCaseLtrs = confirm("Do you want upper case letters in the password?");
  console.log(useUpperCaseLtrs);
}


// Ask user if using numeric characters
function useNumChars(){
  useNumChars = confirm("Do you want numbers in the password?");
  console.log(useNumChars);
}


// Ask user if using special characters
function useLowerCase(){
  useSpecialChars = confirm("Do you want special characters in the password?");
  console.log(useSpecialChars);
}


// User selects password criteria (at least one must be selected)


// When criteria is selected, a random password is generated


// The password is displayed in alert OR written to the page


/*
function generatePassword() {
  console.log("start here");
  howManyCharacters();
  useLowerCase();



  return "finalpassword"
}
*/



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
