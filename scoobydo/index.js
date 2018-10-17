// There are many ways to pick a DOM node; here we get the form itself and the text
// input box, as well as the span element into which we will place the error message.

var form = document.querySelector('form');
var text = document.querySelector('input');
var error = document.querySelector('.error');
var resultPara = document.querySelector('.result');

text.addEventListener("input", function (event) {
  // Each time the user types something, we check if the
  // email field is valid.
  if (text.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    error.innerHTML = ""; // Reset the content of the message
    error.className = "error"; // Reset the visual state of the message
  }
  resultPara.innerHTML = "";
  resultPara.className = "result";
}, false);

form.addEventListener("submit", function (event) {
  // Each time the user tries to send the data, we check
  // if the text input field is valid.
  if (!text.validity.valid) {
    
    // If the field is not valid, we display a custom
    // error message.
    error.innerHTML = "You have to Enter a text before submitting";
    error.className = "error active";
    // And we prevent the form from being sent by canceling the event
    event.preventDefault();
  }else{

    var inputText = text.value;
    
    var finalResult = scoobyDoo(inputText);

    // alert(finalResult);

    resultPara.innerHTML = finalResult;
    resultPara.className = "result active";
    event.preventDefault();
  }

  

  
  
}, false);


function scoobyDoo(string){

    if (typeof(string) !== 'string'){
        return 'Hey! you should input words and strings';
    }

    let inputString = string.split(' ');
    let finalResult = [];

    for (let element of inputString){
        
       let result = []
       let indexVoyel = 0
        // Check for first voyel
        for (let j=0; j < element.length; j++){
            if (/[aeiouAEIOU]/.test(element.charAt(j))){
                indexVoyel = j;
                break
            }
        }
        
        // appending each element of the string from the first voyel index
        for (let k = indexVoyel; k < element.length; k++){
            result.push(element[k]);
        }

        let st; 
        if (indexVoyel){
            result.unshift('r');
        }
        st = result.join('');
        finalResult.push(st);
    }
   
    return finalResult.join(' ');
}


