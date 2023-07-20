let firstNumberDisplay;
let secondNumberDisplay;
let operatorDisplay;

function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
    firstNumber / secondNumber;
}

function operate(firstNumber, secondNumber, operator) {
    if (operator == '+') {
        add(firstNumber, secondNumber);
    } else if (operator == '-') {
        subtract(firstNumber, secondNumber);
    } else if (operator == '*') {
        multiply(firstNumber, secondNumber);
    } else if (operator == '/') {
        divide(firstNumber, secondNumber);
    }
}

const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');

function displayNumbers() {
    
    buttons.forEach((numButton) => {
        numButton.addEventListener('click', () => {
            display.textContent = numButton.id;
        });
    });
}

displayNumbers();