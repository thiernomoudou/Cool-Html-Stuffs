// There are many ways to pick a DOM node; here we get the form itself and the password
// input box, as well as the span element into which we will place the message message.

var form = document.querySelector('form');
var password = document.querySelector('input');
var message = document.querySelector('.message');
// var resultPara = document.querySelector('.result');

password.addEventListener("input", function (event) {
  // Each time the user types something, we check if the
  // email field is valid.
  if (password.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    message.innerHTML = ""; // Reset the content of the message
    message.className = "message"; // Reset the visual state of the message
  }
  resultPara.innerHTML = "";
  resultPara.className = "result";
}, false);

form.addEventListener("submit", function (event) {
  // Each time the user tries to send the data, we check
  // if the password input field is valid.
  if (!password.validity.valid) {
    
    // If the field is not valid, we display a custom
    // message message.
    message.innerHTML = "You have to Enter a password before submitting";
    message.className = "message active";
    // And we prevent the form from being sent by canceling the event
    event.preventDefault();
  }else{

    var inputPassword = password.value;
    
    var finalMessage = passwordStrength(inputPassword);

    // alert(finalResult);

    message.innerHTML = finalMessage;
    message.className = "result";
    event.preventDefault();
  }

  

  
  
}, false);


function passwordStrength(string){

    // check for minimum password length

    let score = 0;
    // Check for minimum of 6 characters
    if (string.length < 6){return 'Minimum password length is 6';}
    // Check for maximum of 12 characters
    if(string.length > 12){return 'Maximum password length is 12';}
    // check for at least one lowercase character
    if(/^(?=.*[a-z]).+$/.test(string)){
      score += 25;
    }
    // check for at least one uppercase character
    if(/^(?=.*[A-Z]).+$/.test(string)){
      score += 25;
    }
    // check for at least one number
    if(/^(?=.*[0-9]).+$/.test(string)){
      score += 25;
    }
    // check for at least one special character
    if(/^(?=.*[$@#&!]).+$/.test(string)){
      score += 25;
    }

    let result = 'The strength of your password is   ' + String(score) + ' %';
    return result;
}


