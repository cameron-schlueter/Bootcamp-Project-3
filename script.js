// Assignment code here
//GIVEN I need a new, secure password

//Step 1:
//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria

// Get references to the #generate element
var generateBtn = document.querySelector("generate");
// Referenceing html to eventually create text, ID of generate in HTML , selecting the button with #


// line 9 first, for the HTML or it does nothing

//Step 2:
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password
// create an array (data structure)

let uppercase = ('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!#$%&()*+,-/:;<=>?@[\]^_`{|}~1234567890');
let undercase = ('abcdefghijklmnopqrstuvwxyz');
let numbers = ('1234567890');
let characters = ('!#$%&()*+,-/:;<=>?@[\]^_`{|}~')

var criteria = document.getElementById("uppercase");
for (var i = 0; i < criteria; i++) {
    criteria[i].onchange = function() {
        if (this.checked) {
            // Checkbox is checked. Perform the desired action.
            console.log(this.value + ' is selected');
        } else {
            // Checkbox is not checked. Perform the desired action.
            console.log(this.value + ' is not selected');
        }
    }
}
var criteria = document.getElementById("lowercase");
for (var i = 0; i < criteria; i++) {
    criteria[i].onchange = function() {
        if (this.checked) {
            // Checkbox is checked. Perform the desired action.
            console.log(this.value + ' is selected');
        } else {
            // Checkbox is not checked. Perform the desired action.
            console.log(this.value + ' is not selected');
        }
    }
}
var criteria = document.getElementById("numbers");
for (var i = 0; i < criteria; i++) {
    criteria[i].onchange = function() {
        if (this.checked) {
            // Checkbox is checked. Perform the desired action.
            console.log(this.value + ' is selected');
        } else {
            // Checkbox is not checked. Perform the desired action.
            console.log(this.value + ' is not selected');
        }
    }
}
var criteria = document.getElementById("characters");
for (var i = 0; i < criteria; i++) {
    criteria[i].onchange = function() {
        if (this.checked) {
            // Checkbox is checked. Perform the desired action.
            console.log(this.value + ' is selected');
        } else {
            // Checkbox is not checked. Perform the desired action.
            console.log(this.value + ' is not selected');
        }
    }
}

var password = ''

for (var i = 0; i < length; i++) {

var characterSet = "";
    if (lowercase) {
      characterSet += lowercase;
    }
    if (uppercase) {
      characterSet += uppercase;
    }
    if (numbers) {
      characterSet += numbers;
    }
    if (characters) {
      characterSet += characters;
    }

    var index = Math.floor(Math.random() * characterSet.length);
    password += characterSet.charAt(index);
  
}
function generatePassword() {
  var passwordLength = document.getElementById("#password-length");
  var length = parseInt(passwordLength.value) || 12;
  if (length < 8 || length > 128) {
    length = 12;
    passwordLength.value = 12;
}
// Write password to the password input
var generateButton = document.getElementById("generate");
generateButton.addEventListener("click", function() {
  var password = generatePassword(12, true, true, true, true);
  var passwordField = document.getElementById("password");
  passwordField.textContent = password;
});

function generatePassword() {
    console.log(password)
    return document.getElementById ("password")
}
//Step 6:
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria


//Step 7:
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page

}
