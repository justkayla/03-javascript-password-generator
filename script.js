// Assignment code
var generateBtn = document.querySelector("#generate");


// Global boolean variables
var numOfChars= 8;    // add conditional logic that min=8 and max=182, else reset to 8
var useLowerCaseLtrs= true;  // Y = true
var useUpperCaseLtrs= true;
var useNumbers= true;
var useSpecialChars= true;


// Arrays of potential outcomes
var useLowerCaseLtrs = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
var useUpperCaseLtrs = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var useNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var useSpecialChars = ["!", "#", "$", "%", "&", "*", "+", "/", ">", "=", "<", "?", "~"];
var comboArray = []; // push user selections into empty array to combine for randomizer


// Write password to the #password input (Assignment code)
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


alert("Do you want to generate a random password?");



// The password is displayed in alert OR written to the page
function generatePassword() {
  console.log("Button clicked");
  howManyCharacters();
    // if (numOfChars < 8 || numOfChars > 128) { 
    //   alert=("Number of characters needs to be between 8-128.")
    // };
  useLowerCase();                   // If TRUE, then push to empty array... ELSE, then...
  useUpperCase();          // If TRUE, then push to empty array... ELSE, then...
  useOfNumbers();         // If TRUE, then push to empty array... ELSE, then...
  useSpecialCharacters();    // If TRUE, then push to empty array... ELSE, then...

  return "finalpassword"
}
generatePassword();



// Need a randomizer for the empty array once it is combined with other inputs

var min = 8;
var max = 128;
var random = Math.floor(Math.random () * (max - min +1) + min);
console.log(random);

if (useLowerCaseLtrs === true) {    // If user selects true, computer will return a password with lowercase letters
    computerInput = "R";      // How to adjust/adapt this language for current code?
} else if (useLowerCaseLeters === false) {      // Computer will not included lowercase letters in password
    computerInput = "P";    
} else {
    computerInput = "S";
};
console.log(computerInput);




// Ask user how many characters (between 8-128)
function howManyCharacters(){
  numOfChars = parseInt( prompt("How many characters?") );
  console.log(numOfChars);  
}


// Ask user if using lowercase characters
function useLowerCase(){ 
  useLowerCaseLtrs = confirm("Do you want lower case letters in the password?");
  console.log(useLowerCaseLtrs);
// If the user would like to have lowercase letters included in their password, then pass all lowercase letters into empty array.



// Ask user if using uppercase characters
function useUpperCase(){
  useUpperCaseLtrs = confirm("Do you want upper case letters in the password?");
  console.log(useUpperCaseLtrs);
}
// If the user would like to have uppercase letters included in their password, then pass all uppercase letters into empty array.




// Ask user if using numeric characters
function useOfNumbers(){
  useNumbers = confirm("Do you want numbers in the password?");
  console.log(useNumbers);
}
// If the user would like to have numbers included in their password, then pass all numbers into empty array.




// Ask user if using special characters
function useSpecialCharacters(){
  useSpecialChars = confirm("Do you want special characters in the password?");
  console.log(useSpecialChars);
}
// If the user would like to have special characters included in their password, then pass all special characters into empty array.











// EACH PROMPT WILL GO INTO THE VARIABLE

// need a to pick something random from an array (min=0, max=max in the array)


// A prompt box appears
// var password = prompt("hello");
// whatever someone types into the prompt goes into the variable

// else/if statements (if true for an arry, push to empty array)


// // Ask user how many characters (between 8-128)
// function howManyCharacters(min=8, max=128){
//   numOfChars = parseInt( prompt("How many characters?") );
// }
// var password = prompt("How many characters");


// // Ask user if using lowercase characters
// function useLowerCase(){ 
//   useLowerCaseLtrs = confirm("Do you want lower case letters in the password?");
//   console.log(useLowerCaseLtrs);
// }


// // Ask user if using uppercase characters
// function useUpperCase(){
//   useUpperCaseLtrs = confirm("Do you want upper case letters in the password?");
//   console.log(useUpperCaseLtrs);
// }


// // Ask user if using numeric characters
// function useOfNumbers(){
//   useNumbers = confirm("Do you want numbers in the password?");
//   console.log(useNumbers);
// }


// // Ask user if using special characters
// function useLowerCase(){
//   useSpecialChars = confirm("Do you want special characters in the password?");
//   console.log(useSpecialChars);
// }


// User selects password criteria (at least one must be selected)


// // When criteria is selected, a random password is generated


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
