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


function generatePassword() {
  var passwordLength = prompt("Enter a password length between 8-128 characters");
  if (isNaN(passwordLength)){
    alert("enter a number")
  }
  if (passwordLength < 8) {
    alert("password too short")
  } else if (passwordLength > 128) {
    alert("password too long")
  }
  var useLowercase = window.confirm("Do you want lowercase in your password?");
  var useUppercase = window.confirm("Do you want uppercase in your password?");
  var useNumbers = window.confirm("Do you want numbers in your password?");
  var useSpecial = window.confirm("Do you want any special characters in your password?");
  if (useLowercase || useNumbers || useSpecial || useUppercase) {
    alert("Good Job!")
  } else {
    alert("Click Ok one or more times for your password")
  }
  var password = "";

  var numbers = "0123456789";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXTZ";
  var lowerCase = "abcdefghiklmnopqrstuvwxyz";
  var special = " #$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var chars = "";

  if (useLowercase) {
    chars += lowerCase;
  }

  if (useUppercase) {
    chars += upperCase;
  }

  if (useNumbers) {
    chars += numbers;
  }

  if (useSpecial) {
    chars += special;
  }

  for (var i = 0; i < passwordLength; i++) {
    var rnum = Math.floor(Math.random() * chars.length);
		password += chars.substring(rnum,rnum+1);
  }
  return password;
}
