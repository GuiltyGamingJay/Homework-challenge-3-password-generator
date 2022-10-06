var generateBtn = document.querySelector("#generate");



function randomInt(min, max){
if(!max){
  max = min
  min = 0
}

var rand = Math.random()
  return Math.floor(min*(1-rand) + rand*max)
}
function getRandomItem(list){
  return list[randomInt(0, list.length - 1)]
}


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
var usersWantsSymbols = window.confirm("Would you like to include Symbols in your Password?")
var usersWantsLowercase = window.confirm("Would you like to include Lowercase letters in your Password?")
var usersWantsUppercase = window.confirm("Would you like to include Uppercase letters in your password?")

var numberlist = [ "0", "1","2","3","4","5","6","7","8","9"]
var symbolList = ["!","#","$","%","&","'","(",")","*","+","-","=",".","/",":",";","<","=",">","?","@","[","]","^","_"]
var LowercaseList = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var UppercaseList =["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] 
var optionsCart = []




if (usersWantsNumbers === true){
  optionsCart.push(numberlist)

}

if (usersWantsSymbols === true){
  optionsCart.push(symbolList)

}

if (usersWantsLowercase === true){
  optionsCart.push(LowercaseList)

}

if (usersWantsUppercase === true){
  optionsCart.push(UppercaseList)
}
if (optionsCart.length === 0){
  optionsCart.push(LowercaseList)
}
var generatedPassword = ""

for( var i = 0; i < passwordLength; i++){
  var randomList = getRandomItem(optionsCart)
  var randomChar =getRandomItem(randomList)
   generatedPassword += randomChar
}

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
