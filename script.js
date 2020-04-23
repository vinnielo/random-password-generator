// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordArr = [];
var randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


//* these are the prompts. if clicked yes or they meet the perameters they move forward. 
function promptMe(){
    var passwordLength = prompt("How many characters? (min 8, max 128)");
    console.log(passwordLength)
    if (passwordLength >= 8 && passwordLength <= 128)  {
            askLowerCase(passwordLength);
            
       }    
    else{
        promptMe();
        }
}

function askLowerCase(initialPwLength) {
    console.log(initialPwLength);
    var lowerCase = confirm("Do you need lowercase letters?");
    console.log(lowerCase)
        if (lowerCase === true) {
            // getRandomLower();
            askUpperCase();
        }
        else {
            
            askUpperCase();
        }
};


function askUpperCase() {
    var upperCase = confirm("Do you need UPPERCASE letters?");
console.log(upperCase);
    if (upperCase === true) {
        // Logic goes here
        askNumber();
    }
    else {
        
        askNumber();    
    }
}

function askNumber() {
    var numbers = confirm("Do you need numbers?");
console.log(numbers);
    if (numbers === true) {
        // Logic goes here
        askSymbol();
    }
    else {
        
        askSymbol();
    }
}

function askSymbol() {
    var specialChar = confirm("Need special characters? (!$%^&)");
console.log(specialChar);
    if (specialChar === true) {
        // Logic goes here
        
    }
    else {
        
       
    }
}


function generatePassword(lower, upper, number, symbol, length) {
	var generatedPassword = '';
	var typesCount = lower + upper + number + symbol;
	var typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
	
	// Doesn't have a selected type
	if(typesCount === 0) {
		return '';
	}
	
	// create a loop
	for(var i=0; i<length; i+=typesCount) {
		typesArr.forEach(type => {
			var funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();
		});
	}
	
	 finalPassword = generatedPassword.slice(0, length);
	
	return finalPassword;
}

console.log(generatePassword)
    
    // * random characters function
  

    function getRandomLower(){
       return String.fromCharCode(Math.floor(Math.random()*26) + 97) 
    }

    function getRandomUpper(){
        return String.fromCharCode(Math.floor(Math.random()*26) + 65) 
     }

     function getRandomNumber(){
        return String.fromCharCode(Math.floor(Math.random()*10) + 48) 
     }

     function getRandomSymbol() {
        const symbols = '!@#$%^&*(){}[]=<>/,.'
        return symbols[Math.floor(Math.random() * symbols.length)];
    }
 

    console.log(getRandomSymbol());
    console.log(getRandomUpper());
    console.log(getRandomNumber());
    console.log(getRandomLower());




// // Add event listener to generate button
generateBtn.addEventListener("click", promptMe);