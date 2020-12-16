//Assignment Code
var generateBtn = document.querySelector("#generate");
//Arrays for criteria options
var special = ["!","#","$","%","&","'","()","*","+","-",".","/",":",";","<","=",">","?","@","[","\",","]","^","_","`","{","|","}","~"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var number = [0,1,2,3,4,5,6,7,8,9];

function generatePassword() {
    //User's desire length for password//
    var pLength = parseInt(prompt("How long would you like your password to be? Must be between 8 and 128."));
    //This will show message if user doesn't type in value for desired password length
    if (isNaN(length) === true){
      alert("Must use a number!");
      return;
    }
    
    //if user chooses above 128//
    if(pLength > 128) {
      alert("Must be between 8 and 128 characters.");
      return;
    }
    //if user chooses below 8//
    if(pLength < 8) {
      alert("Must be between 8 and 128 characters.");
      return;
    }
    //confirmation for criteria options//
    var hasSpecial = confirm("Do you want to use special characters?");
    var hasUppercase = confirm("Do you want to use uppercase?");
    var hasLowercase = confirm("Do you want to use lowercase?");
    var hasNumber = confirm("Do you want to use numbers?");
    //if user does not choose any criteria//
    if(hasSpecial === false &&
      hasUppercase === false &&
      hasLowercase === false &&
      hasNumber === false) {
      alert("Must select a criteria.");
      return;
    }

    //If and else statements for options//
    if(hasSpecial === true && hasUppercase === true && hasLowercase === true && hasNumber === true) {
      choices = special.concat(uppercase,lowercase,number);
    }
   
    else if(hasSpecial === true && hasUppercase === true && hasLowercase === true) {
      choices = special.concat(uppercase,lowercase);
    }

    else if(hasSpecial === true && hasUppercase === true && hasNumber === true) {
      choices = special.concat(uppercase,number);
    }

    else if(hasSpecial === true && hasLowercase === true && hasNumber === true) {
      choices = special.concat(lowercase,number);
    }

    else if(hasUppercase === true && hasLowercase === true && hasNumber === true) {
      choices = uppercase.concat(lowercase,number);
    }
  
    else if(hasSpecial === true && hasUppercase === true){
      choices = special.concat(uppercase);
    }

    else if(hasSpecial === true && hasLowercase === true) {
      choices = lowercase.concat(lowercase);
    }
    
    else if(hasSpecial === true && hasNumber === true) {
      choices = special.concat(number);
    }

    else if(hasUppercase === true && lowercase === true) {
      choices = uppercase.concat(lowercase);
    }

    else if(uppercase === true && number === true) {
      choices = uppercase.concat(number);
    }

    else if(hasLowercase === true && hasNumber === true) {
      choices = lowercase.concat(number);
    }
    
    else if(hasSpecial === true) {
      choices = special;
    }

    else if(hasUppercase === true) {
      choices = uppercase;
    }

    else if(hasLowercase === true) {
      choices = lowercase;
    }

    else if(hasNumber === true) {
      choices = number;
    }

    var finalPassword = [];
    
    for(var i = 0; i < pLength; i++) {
      var userChoices = choices[Math.floor(Math.random() * choices.length)];
      finalPassword.push(userChoices);
    }
      return finalPassword.join("");
  }
       
  // Write password to the #password input
  var userPassword = [];
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);