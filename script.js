// Assignment Code
var generateBtn = document.querySelector("#generate");

var letters= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers= [0,1,2,3,4,5,6,7,8,9];
var special = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
 
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function promptMe(){
    var passwordlength = prompt("How long does it need to be?");
    var lowercase = confirm("Do you need lowercase letters?");
    var uppercase = confirm("Do you need UPPERCASE letters?");
    var specialChar = confirm("Need special characters? (!$%^&)");
    var numbers = confirm("Do you need numbers?");

    if (lowercase === true) {
        console.log("yes")
    }
    else {
        console.log("no")
    }
    if (uppercase === true) {
        console.log("yes")
    }
    else {
        console.log("no")
    }

    if (specialChar === true) {
        console.log("yes")
    }
    else {
        console.log("no")
    }
    if (numbers === true) {
        console.log("yes")
    }
    else {
        console.log("no")
    }
    if (passwordlength) {
        console.log(passwordlength)
    }
   
}





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
