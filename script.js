let firstNumber;
let operator;
let secondNumber;


function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function operate(operator, firstNumber, secondNumber) {
    if(operator === "+") {
        return add(firstNumber, secondNumber);
    }
    if(operator === "-") {
        return subtract(firstNumber, secondNumber);
    }
    if(operator === "*") {
        return multiply(firstNumber, secondNumber);
    }
    if(operator === "/") {
        return divide(firstNumber, secondNumber);
    }
}