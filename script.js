// Assignment code
var generateBtn = document.querySelector("#generate");    // Creates a variable that references a piece of html


// Global boolean variables
// When the User selects "confirm" on these variables, they will be included in the password
var numOfChars= 8;    // add conditional logic that min=8 and max=182, else reset
var wantsLowerCase= true;  // Y = true
var wantsUpperCase= true;
var wantsNumbers= true;
var wantsSpecialChars= true;


// Arrays of potential outcomes
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChars = ["!", "#", "$", "%", "&", "*", "+", "/", ">", "=", "<", "?", "~"];
var comboArray = []; // push user selections into empty array to combine for randomizer


// Write password to the #password input (Assignment code)
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Function for combining arrays upon selection
function createArray() {
  if (wantsLowerCase) {     // Don't need === true because already set to true in global scope
    comboArray = comboArray.concat(lowerCase)   // If User wants lowercase letters, add (concat) lowercase letters to comboArray
  }
  console.log(comboArray);
  if (wantsUpperCase) {
    comboArray = comboArray.concat(upperCase)     // If User wants uppercase letters, add (concat) uppercase letters to comboArray
  }
  console.log(comboArray);
  if (wantsNumbers) {
    comboArray = comboArray.concat(numbers)     // If User wants numbers, add (concat) numbers to comboArray
  }
  console.log(comboArray);
  if (wantsSpecialChars) {
    comboArray = comboArray.concat(specialChars)      // If User wants special characters, add (concat) special characters to comboArray
  }
  console.log(comboArray);
 }



// The password is displayed in alert OR written to the page
function generatePassword() {
  console.log("Button clicked");
  howManyCharacters();
    if (numOfChars < 8 || numOfChars > 128) { 
      alert("Number of characters needs to be between 8-128.")
      return generatePassword();
    };
  useLowerCase();                   
  useUpperCase();          
  useOfNumbers();         
  useSpecialCharacters();    
    if (!wantsLowerCase && !wantsUpperCase && !wantsNumbers && !wantsSpecialChars) {
      alert("You must choose at least one option.")
      return generatePassword();
    }
  createArray();

  return constructPassword();
}


function constructPassword() {
  var passwordString = "";
  console.log(passwordString);
  for (var i = 0; i < numOfChars; i++) {
    var randomIndex = Math.floor(Math.random () * comboArray.length);
    var randomChar = comboArray[randomIndex];
    passwordString = passwordString + randomChar;
  }
  return passwordString;
}


// Ask user how many characters (between 8-128)
function howManyCharacters(){
  numOfChars = parseInt( prompt("How many characters?") );
  console.log(numOfChars);  
}


// Ask user if using lowercase characters
function useLowerCase(){ 
  wantsLowerCase = confirm("Do you want lower case letters in the password?");
  console.log(wantsLowerCase);
}
// If the user would like to have lowercase letters included in their password, then pass all lowercase letters into empty array.



// Ask user if using uppercase characters
function useUpperCase(){
  wantsUpperCase = confirm("Do you want upper case letters in the password?");
  console.log(wantsUpperCase);
}
// If the user would like to have uppercase letters included in their password, then pass all uppercase letters into empty array.



// Ask user if using numeric characters
function useOfNumbers(){
  wantsNumbers = confirm("Do you want numbers in the password?");
  console.log(wantsNumbers);
}
// If the user would like to have numbers included in their password, then pass all numbers into empty array.



// Ask user if using special characters
function useSpecialCharacters(){
  wantsSpecialChars = confirm("Do you want special characters in the password?");
  console.log(wantsSpecialChars);
}
// If the user would like to have special characters included in their password, then pass all special characters into empty array.



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);    // "Listening" for click, when click happens passes function through that you want to run 
// Eventlisteners go at the end
