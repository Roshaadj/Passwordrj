// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword(){
var includeLowerCase = confirm('do you want to confirm lowercase')
var password
var passwordLength = alert('how long is your password')
console.log(passwordLength)
if (includeLowerCase) {
  password = 'user wants lowerCase'
}
  else password = 'user doesnt want lowerCase'

  return password;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword,);