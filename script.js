// Assignment code here
var generateBtn = document.querySelector("#generate");


function generatePassword(){
 
  var userInput = window.prompt("How long do you want your password to be ?")

  var passwordLength = parseInt(userInput)

  if(isNaN(passwordLength)){
   window.alert("Input is not of numeric value!!! Please try Again!!!")
   return
}
if (passwordLength < 8 || passwordLength > 128){
  window.alert("Password length must be between 8 and 128 characters")
  return
}

else{
  window.alert( "Congratulations that is a valid number!!!")

}
var usersWantsNumbers = window.confirm("Would you like to include numbers in your Password?")
var usersWantsymbols = window.confirm("Would you like to include Symbols in your Password?")
var usersWantsLowercase = window.confirm("Would you like to include Lowercase letters in your Password?")
var usersWantsUppercase = window.confirm("Would you like to include Uppercase letters in your password?")
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
