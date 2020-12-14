//Assignment Code
var generateBtn = document.querySelector("#generate");
//Arrays for criteria options
var special = ["!","#","$","%","&","'","()","*","+","-",".","/",":",";","<","=",">","?","@","[","\",","]","^","_","`","{","|","}","~"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var number = [0,1,2,3,4,5,6,7,8,9];

function generatePassword() {
    //User's desire length for password
    var pLength = parseInt(prompt("How many characters would you like?"));
    //This will show message if user doesn't type in value for desired password length
    if (isNaN(length) === true){
      alert("Must use a value!");
      return;
    }
    //if user types above 128
    if(pLength > 128) {
      alert("Must be between 8 and 128 characters.");
      return;
    }
    //if user chooses below 8
    if(pLength < 8) {
      alert("Must be between 8 and 128 characters.");
      return;
    }
    //confirmation for criteria options
    var hasSpecial = confirm("Do you want to use special characters?");
    var hasUppercase = confirm("Do you want to use uppercase?");
    var hasLowercase = confirm("Do you want to use lowercase?");
    var hasNumber = confirm("Do you want to use numbers?");
    //if user does not choose any criteria
    if(hasSpecial === false &&
      hasUppercase === false &&
      hasLowercase === false &&
      hasNumber === false) {
      alert("Must select a criteria.");
      return;
    }

    //If and else statements for options
    if(hasSpecial && hasUppercase && hasLowercase && hasNumber) {
      choices = special.concat(uppercase,lowercase,number);
    }
    /*3 option*/
    else if(hasSpecial && hasUppercase && hasLowercase) {
      choices = special.concat(uppercase,lowercase);
    }

    else if(hasSpecial && hasUppercase && hasNumber) {
      choices = special.concat(uppercase,number);
    }

    else if(hasSpecial && hasLowercase && hasNumber) {
      choices = special.concat(lowercase,number);
    }

    else if(hasUppercase && hasLowercase && hasNumber) {
      choices = uppercase.concat(lowercase,number);
    }
    /*2 option*/
    else if(hasSpecial && hasUppercase){
      choices = special.concat(uppercase);
    }

    else if(hasSpecial && hasLowercase) {
      choices = lowercase.concat(lowercase);
    }
    
    else if(hasSpecial && hasNumber) {
      choices = special.concat(number);
    }

    else if(hasUppercase && lowercase) {
      choices = uppercase.concat(lowercase);
    }

    else if(uppercase && number) {
      choices = uppercase.concat(number);
    }

    else if(hasLowercase && hasNumber) {
      choices = lowercase.concat(number);
    }
    /*1 option*/
    else if(hasSpecial) {
      choices = special;
    }

    else if(hasUppercase) {
      choices = uppercase;
    }

    else if(hasLowercase) {
      choices = lowercase;
    }

    else if(hasNumber) {
      choices = number;
    }

    var finalPassword = [];
    
    for(var i = 0; i < pLength; i++) {
      var userPicks = choices[Math.floor(Math.random() * choices.length)];
      finalPassword.push(userPicks);
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