let firstNumber = null;
let secondNumber = null;
let operation = null;
let displayValue = '0';

function add(a, b) {
    return Number(a) + Number(b);
}

function subtract(a, b) {
    return Number(a) - Number(b);
}

function multiply(a, b) {
    return Number(a) * Number(b);
}

function divide(a, b) {
    return Number(a) / Number(b);
}

function operate(firstNumber, secondNumber, operator) {
    if (operator == '+') {
        return add(firstNumber, secondNumber);
    } else if (operator == '-') {
        return subtract(firstNumber, secondNumber);
    } else if (operator == 'x') {
        return multiply(firstNumber, secondNumber);
    } else if (operator == '/') {
        return divide(firstNumber, secondNumber);
    }
}

function clickEqual() {
    secondNumber = displayValue;
    displayValue = operate(firstNumber, secondNumber, operation);
}

function clickClear() {
    displayValue = '0';
    firstNumber = null;
    secondNumber = null;
    operation = null;
}

function clickDelete() {
    displayValue = displayValue.slice(0, displayValue.length - 1);
}

function clickDecimal() {
    if (!String(firstNumber).includes('.')) {
        displayValue = displayValue + '.';
    } else if (!String(secondNumber).includes('.')) {
        if (secondNumber == null) {
            displayValue = '.';
        } else {
            displayValue = displayValue + '.';
        }
    }
}

function clickNumeral(index) {
    if (displayValue == '0') {
        displayValue = buttons[index].textContent;
    } else if (!(displayValue == '0')) {
        if (displayValue == '.') {
            displayValue = '.' + buttons[index].textContent;
        } else if (operation !== null && firstNumber !== null && secondNumber == null) {
            displayValue = buttons[index].textContent;
            secondNumber = displayValue;
        } else {
            displayValue = displayValue + buttons[index].textContent;
        }
    }
}

function clickOperator(index) {
    if (operation == null) {
        firstNumber = displayValue;
        operation = buttons[index].textContent;
    } else {
        displayValue = operate(firstNumber, displayValue, operation);
        updateDisplay();
        firstNumber = displayValue;
        operation = buttons[index].textContent;
        secondNumber = null;
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
            clickNumeral(i);
            updateDisplay();
        } else if (buttons[i].classList == 'symbol') {
            clickOperator(i);
        } else if (buttons[i].classList == 'clear') {
            clickClear();
            updateDisplay();
        } else if (buttons[i].classList == 'equal') {
            clickEqual();
            updateDisplay();
        } else if (buttons[i].classList == 'decimal') {
            clickDecimal();
            updateDisplay();
        } else if (buttons[i].classList == 'delete') {
            clickDelete();
            updateDisplay();
        }
    })
}



