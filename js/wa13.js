function check() {
    console.log('test');
}

function reset() {
    outputInt = 0;
    output.textContent = outputInt;
}

function random() {
    outputInt = randomNumber(0, 21);
    output.textContent = outputInt;
}

function randomNumber(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
  }

function submit() {
    alert('YOUR VOLUME IS NOW: ' + output.textContent + '/50');
}


const output = document.querySelector('.output');
let outputInt = parseInt(output.textContent);
console.log(outputInt);



const resetButton = document.querySelector('.reset-button').addEventListener('click', reset);
const randomButton = document.querySelector('.random-button').addEventListener('click', random);
const submitButton = document.querySelector('.submit-button').addEventListener('click', submit);


/* const button = document.querySelector('.button');
const output = document.querySelector('.output');
let phone_content = document.querySelector('.phone');
button.addEventListener('click', updateOutput);
function updateOutput() {
    output.textContent = phone_content.value;
    alert(phone_content.value);
}
*/


// Get the first random number
let firstNumber = Math.floor(Math.random() * 11);

// Define a function to generate a new random number and add it to the first one
function addRandomNumber() {
  let secondNumber = Math.floor(Math.random() * 11);
  let sum = firstNumber + secondNumber;
  console.log(`The sum of ${firstNumber} and ${secondNumber} is ${sum}.`);
}


