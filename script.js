// Assignment code here
//GIVEN I need a new, secure password

//Step 1:
//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Referenceing html to eventually create text, ID of generate in HTML , selecting the button with #


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// line 9 first, for the HTML or it does nothing

//Step 2:
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password
// create an array (data structure)

let arraychars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!#$%&()*+,-/:;<=>?@[\]^_`{|}~'



//Step 3:
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters

Math.floor(8)
Math.ceil(128)

//Step 4:
//WHEN asked for character types to include in the password
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters


//Step 5:
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected

//Step 6:
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria



//Step 7:
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page



// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  passwordText.value = arraychars;
 
}

function generatePassword() {
  var generatePassword = document.getElementById('#password')
  return generatePassword('#password');
}



