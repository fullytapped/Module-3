var generateBtn = document.querySelector("#generate");
const UPPER_CASE='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWER_CASE='abcdefghijklmnopqrstuvwxyz';
const NUBMIES='1234567890';
const CHARACTERS='!@#$%^&*()_+?><:"{}|';
var selectionSet='';
var passwordLength;
function writePassword() {
  var password = generatePassword();
    var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword(){
  var password='';
  selectionSet='';
  promptPasswordLength();
  if(generateBtn.disabled==false){
    promptIncludeCharactes('upper case',UPPER_CASE);
    promptIncludeCharactes('lower case', LOWER_CASE);
    promptIncludeCharactes('number',NUBMIES);
    promptIncludeCharactes('special',CHARACTERS);
  
    if(selectionSet.length==0){
      alert('Can you please say yes to at least one? :(');
    }else{
      console.log('passwordLength '+passwordLength)
      // for(var i=0;i<12;i++){
      //   password=password+selectRandomCharacter();
      // }
     while(password.length<passwordLength){
       password=password+selectRandomCharacter();
      }  
    }
  }
  return password;
}

function promptPasswordLength(){
  var invalid=true;
  var promptMessage="Enter password length";
  var counter=0;
  while(invalid){
    passwordLength=prompt(promptMessage);
    promptMessage=validateLength();
    if(promptMessage=='Valid'){
      invalid=false;
    if(passwordLength==69){
      alert('nice.');
    }
    }else{
      counter++;
      passwordLength=0;
    }
    if (counter>1){
      promptMessage="This is your last chance buddy, no letters, no numbers below 8, OR above 128. Try again.";
    }
    if(counter>2){
      generateBtn.disabled=true;
      alert("Okay buddy, you asked for it! NO MORE PASSWORD GENERATOR FOR YOU! >:(");
      invalid=false;
    }
  }
}
function validateLength(){
  if(passwordLength <8||passwordLength>128){
    return 'Sorry my dude, the password length has to be between 8 and 128. Try again.';
  }
  if(isNaN(passwordLength)){
    return "This isn't even a number, you think you're funny? Try again.";
  }
    return "Valid";
}
function promptIncludeCharactes(charType, charSet){
  var invalid=true;
  var promptMessage="Would you like to include " + charType + " characters good sir? Y/N";
  var counter=0;
  var response;
  var validResponses="YyNn";
  while(invalid){
    response=prompt(promptMessage);
    if (response=="Y"||response=="y"){
      selectionSet=selectionSet+charSet;
      invalid=false;
    }
    if (response=="N"||response=='n'){
      invalid=false;
    }
    if (validResponses.includes(response)==false||response.length!=1){
      counter++
      if(counter<2){
        promptMessage="Listen friend, I'm not letting you out of this prompt til you answer... Would you like to include " + charType + " characters? Y/N";
      }else{
        generateBtn.disabled=true;
        promptMessage="Alright man, you got this far, so I'm going to let you generate the password as long as you follow the instructions from here on out, but after that, were cutting you off";

      }
    }
  }

}

function selectRandomCharacter(){
  var randomCharacter= selectionSet.charAt(Math.floor(Math.random()*selectionSet.length));
  return randomCharacter;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
