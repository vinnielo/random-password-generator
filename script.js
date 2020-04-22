// Assignment Code
var generateBtn = document.querySelector("#generate");

var x= "0123456789!@#$%^&*()-_=+:;?/ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

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
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
