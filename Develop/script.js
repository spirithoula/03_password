// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//click the button to get prompt box
function generatePassword() {
  //prompts user to enter a password length
  var passwordLength = prompt("Enter a password length between 8-128 characters");
  // if (isNaN(passwordLength)){
  //   alert("enter a number")
  // }
  // if (passwordLength < 8) {
  //   alert("password too short")
  // } else if (passwordLength > 128) {
  //   alert("password too long")
  // }
  var useLowercase = window.confirm("Do you want lowercase in your password?");
}
