// Assignment Code
var generateBtn = document.querySelector("#generate");
var validnumbers="1234567890"
var validuppercase="ABCDEFGHIJKLMNOPQRSTVWXYZ"
var validlowercase="abcdefghijklmnopqrstvwxyz"
var validspecialcharacters="!@#$%^&*"
var allcharacters=""
var upassword=""
// Write password to the #password input
function writePassword() {
  var password = getuserinput();
  var passwordText = document.querySelector("#password");
  console.log(password)

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function getuserinput(){
  allcharacters=""
  upassword=""
  var pswdlength=prompt("length of the password")
  if( pswdlength >= 8 && pswdlength <= 128){
  var yesnumbers=confirm("would you like to have numbers")
  var yesuppercase=confirm("would you like to have uppercase letters")
  var yeslowercase=confirm("would you like to have lowercase letters")
  var yescharacters=confirm("would you like to have special characters")
  if( !yescharacters && !yesnumbers && !yesuppercase && !yeslowercase){
    return "please select at least one option"
  }
  else{
            if(yesnumbers){
              allcharacters+=validnumbers
            }
            if(yesuppercase){
              allcharacters+=validuppercase
            }
            if(yeslowercase){
              allcharacters+=validlowercase
            }
            if(yescharacters){
              allcharacters+=validspecialcharacters
            }
            console.log("AcceptedCharacters",allcharacters);
          
            for(let i=1;i<=pswdlength;i++){
              var index = Math.floor(Math.random() * allcharacters.length)
              console.log(allcharacters[index])
                upassword+=allcharacters[index]
            }

          console.log("Password:",upassword)
          return upassword
     }
}  
 else{
   return "password lenght has to be greater than 8 and less than 128"
 }
}
