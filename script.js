// Global variables
var generateBtn = document.querySelector("#generate");

var numOfChars;
var useLowerCaseLtrs = ["abcdefghijklmnopqrstuvwxyz"];
var useUpperCaseLtrs = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var useNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var useSpecialChars = ["!#$%&*+/>=<?~"];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// When user clicks the Generate Password button
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// A prompt box appears
var password = prompt("hello");
// whatever someone types into the prompt goes into the variable

// else/if statements for yes/no special characters, yes/no lower/uppercase, yes/no numbers


// Ask user how many characters (between 8-128)
function howManyCharacters(min=8, max=128){
  numOfChars = parseInt( prompt("How many characters?") );
}
var password = prompt("How many characters");


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
function useOfNumbers(){
  useNumbers = confirm("Do you want numbers in the password?");
  console.log(useNumbers);
}


// Ask user if using special characters
function useLowerCase(){
  useSpecialChars = confirm("Do you want special characters in the password?");
  console.log(useSpecialChars);
}


// User selects password criteria (at least one must be selected)


// // When criteria is selected, a random password is generated



// The password is displayed in alert OR written to the page

function generatePassword() {
  console.log("start here");
  numOfChars();
  useLowerCaseLtrs();
  useUpperCaseLtrs();
  useNumbers();
  useSpecialChars();

  return "finalpassword"
}






/* Assignment Code
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
 function writePassword() {
   var password = generatePassword();
   var passwordText = document.querySelector("#password");

   passwordText.value = password;
 }

*/
