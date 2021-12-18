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


//function to generate the password. 
function generatePassword(){
  longStringName = "";
  passwordLength = prompt("Choose password length. \n (It must be between 8 and 128 characters.)")
  if(isNaN(passwordLength)){
    alert("That is not a number");
    return generatePassword();
  }
  else if(passwordLength < 8 || passwordLength > 128){
    alert("You must have between 8 and 128 characters.");
    return generatePassword();
  }
   else{
    console.log(passwordLength);
  }
  let lowerCaseReq = confirm("Do you require lowercase letters?")
    if(lowerCaseReq === true){
      longStringName = longStringName+"abcdefghijklmnopqrstuvwxyz";
      console.log(longStringName);
    }
  let upperCaseReq = confirm("Do you require uppercase letters?")
    if(upperCaseReq === true){
      longStringName = longStringName+"ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      console.log(longStringName);
    }
  let numericReq = confirm("Do you require numbers?")
    if(numericReq === true){
      longStringName = longStringName+"0123456789";
      console.log(longStringName);
    }
  let specialReq = confirm("Do you require special characters?")
  if(specialReq === true){
    longStringName = longStringName+"!@,#$%&*{}[]/+=";
    console.log(longStringName);
  }
  function passJumb(length, chars) {
    var passwordJ = '';
    for (var i = length; i > 0; --i) passwordJ += chars[Math.floor(Math.random() * chars.length)];
    return passwordJ;
  }
  pJumb = passJumb(passwordLength, longStringName);
  
 console.log(pJumb);

return pJumb

}






// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
