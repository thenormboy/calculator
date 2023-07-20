let firstNumber = null;
let secondNumber = null;
let operation = null;
let displayValue = '0';

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
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

function updateDisplay (){
    const display = document.querySelector('.display');
    display.innerText = displayValue;
}

updateDisplay();

const buttons = document.querySelectorAll('button');


for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        if (buttons[i].classList == 'numeral') {
            displayValue = displayValue + buttons[i].textContent;
            firstNumber = displayValue;
            updateDisplay();
        } else if (buttons[i].classList == 'symbol') {
            operation = buttons[i].textContent;
        } else if (buttons[i].classList == 'clear') {
            displayValue = '0';
            firstNumber = null;
            secondNumber = null;
            operation = null;
            updateDisplay();
        }
    })
}

