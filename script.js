// Assignment Code
function writePassword(){

var generateBtn = document.querySelector("#generate");


var passwordLength = prompt("How many characters? (min 8, max 128)");
var lowerCase1 = confirm("Do you need lowercase letters?");
var upperCase1 = confirm("Do you need UPPERCASE letters?");
var numbers = confirm("Do you need numbers?");

var specialChar = confirm("Need special characters? (!$%^&)");
var lowerCase = 'abcdefghijklmnopqrstuvwxyz'.split("");
var	upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
var	number = '0123456789'.split("");    
var	symbol = '*;<>()[]{}#$?!^|'.split("");

var password = "";
var letterArr = [];

console.log(lowerCase)
    
// console.log(passwordLength)
    if (passwordLength >= 8 && passwordLength <= 128)  {       
            
            // console.log(password)
       }  
       else{
           
       } 
      
    if (lowerCase1 === true) {
            
            
            letterArr = letterArr.concat(lowerCase)
        }

    if (upperCase1 === true) {
        // Logic goes here
        
        letterArr = letterArr.concat(upperCase)
    }

    if (numbers === true) {
        // Logic goes here
        
        letterArr = letterArr.concat(number)
    }

    if (specialChar === true) {
        // Logic goes here
        letterArr = letterArr.concat(symbol)
        
    }
    else {
        
       
    }
console.log(letterArr)



for(var i=0; i < passwordLength; i++) {
    var random = Math.floor(Math.random() * letterArr.length);
    // var lRand = Math.floor(Math.random() * lowerCase.length);
    // var uRand = Math.floor(Math.random() * upperCase.length);
    // var num = Math.floor(Math.random() * number.length);
    // var specC = Math.floor(Math.random() * symbol.length);
    password = password + letterArr[random]

    console.log(password);       
        
    }

    document.querySelector("#password").value = password
}

// // // Add event listener to generate button
var generateBtn = document.getElementById("generate");
generateBtn.addEventListener("click", writePassword);




   
  





