// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
var includeLowerCase = confirm('do you want to include lowercase characters?')
var includeUppperCase = confirm('do you want to include uppercase characters?')
var includeNumberic = confirm('do you want to include numeric characters?')
var includeSpecialChar = confirm('do you want to include special characters?')
var passwordLength = window.prompt('How long is your password? Must be between 8 and 128 characters')
console.log(passwordLength)

var password = '';
for (var i = 0; i < passwordLength; i++) {
  password += String.fromCharCode(Math.floor(Math.random() * 77) + 34);
  if (includeLowerCase){
    password.toLowerCase();
  }
  if (!includeUppperCase){
    password.toLowerCase();
  }

}
return password;
 
}


// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

return password;  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword,);
