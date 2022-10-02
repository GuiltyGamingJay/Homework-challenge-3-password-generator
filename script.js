// Assignment code here
var generateBtn = document.querySelector("#generate");


function generatePassword(){
 
  var userInput = window.prompt("How long do you want your password to be ?")

  var passwordLength = parseInt(userInput)

  if(isNaN(passwordLength))
   window.alert("Input is not of numeric value!!! Please try Again!!!")
}


// Get references to the #generate element


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
