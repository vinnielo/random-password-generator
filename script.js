// Assignment Code
function writePassword() {
  //  Starts prompt prompts that log into letter array
  var passwordLength = prompt("How many characters? (min 8, max 128)");

  // values
  var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var number = "0123456789".split("");
  var symbol = "*;<>()[]{}#$?!^|".split("");

  var password = "";

  // letter array stores info
  var totalChar = [];

  // console.log(lowerCase)

  // if statements for prompts and confirms

  if (passwordLength >= 8 && passwordLength <= 128) {
    
    var lowerCase1 = confirm("Do you need lowercase letters?");
    var upperCase1 = confirm("Do you need UPPERCASE letters?");
    var numbers = confirm("Do you need numbers?");
    var specialChar = confirm("Need special characters? (!$%^&)");

    if (lowerCase1 === true) {
      totalChar = totalChar.concat(lowerCase);
    }

    if (upperCase1 === true) {
      // concats the characters to the array

      totalChar = totalChar.concat(upperCase);
    }

    if (numbers === true) {
      // concats the characters to the array

      totalChar = totalChar.concat(number);
    }

    if (specialChar === true) {
      // concats the characters to the array
      totalChar = totalChar.concat(symbol);
    } else {
    }

    console.log(totalChar);

    // loop for random characters

    for (var i = 0; i < passwordLength; i++) {
      var random = Math.floor(Math.random() * totalChar.length);
      // var lRand = Math.floor(Math.random() * lowerCase.length);
      // var uRand = Math.floor(Math.random() * upperCase.length);
      // var num = Math.floor(Math.random() * number.length);
      // var specC = Math.floor(Math.random() * symbol.length);
      password = password + totalChar[random];

      console.log(password);
    }

    document.querySelector("#password").value = password;
    // will reload the page if min characters are not met
  } else {
    location.reload();
  }
}

// // // Add event listener to generate button
var generateBtn = document.getElementById("generate");
generateBtn.addEventListener("click", writePassword);
