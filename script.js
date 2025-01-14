let firstNumber = 0;
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

/* set up the buttons to take input via event listeners */
const ceButton = document.querySelector(".CE");
const divideButton = document.querySelector(".Divide");
const sevenButton = document.querySelector(".Seven");
const eightButton = document.querySelector(".Eight");
const nineButton = document.querySelector(".Nine");
const multiplyButton = document.querySelector(".Multiply");
const fourButton = document.querySelector(".Four");
const fiveButton = document.querySelector(".Five");
const sixButton = document.querySelector(".Six");
const minusButton = document.querySelector(".Minus");
const oneButton = document.querySelector(".One");
const twoButton = document.querySelector(".Two");
const threeButton = document.querySelector(".Three");
const plusButton = document.querySelector(".Plus");
const zeroButton = document.querySelector(".Zero");
const equalButton = document.querySelector(".Equal");

//clear button
ceButton.addEventListener("click", function() {
    let resultsText = document.querySelector(".result");
    resultsText.textContent = "0";
    firstNumber = "";
    secondNumber = "";
});

//divide button. 
divideButton.addEventListener("click", function() {
    let resultsText = document.querySelector(".result");
    let resultArray = resultsText.textContent.split("");
    let lastValue = resultArray[resultArray.length - 1];
    if(lastValue === "/" || lastValue === "+" || lastValue === "-" || lastValue === "*") {
        return;
    }
    resultsText.textContent = resultsText.textContent + "/";
    operator = "/";
});

//multiply
multiplyButton.addEventListener("click", function() {
    let resultsText = document.querySelector(".result");
    let resultArray = resultsText.textContent.split("");
    let lastValue = resultArray[resultArray.length - 1];
    if(lastValue === "/" || lastValue === "+" || lastValue === "-" || lastValue === "*") {
        return;
    }
    resultsText.textContent = resultsText.textContent + "*";
    operator = "/";
});

//minus
minusButton.addEventListener("click", function() {
    let resultsText = document.querySelector(".result");
    let resultArray = resultsText.textContent.split("");
    let lastValue = resultArray[resultArray.length - 1];
    if(lastValue === "/" || lastValue === "+" || lastValue === "-" || lastValue === "*") {
        return;
    }
    resultsText.textContent = resultsText.textContent + "-";
    operator = "/";
});

//plus
plusButton.addEventListener("click", function() {
    let resultsText = document.querySelector(".result");
    let resultArray = resultsText.textContent.split("");
    let lastValue = resultArray[resultArray.length - 1];
    if(lastValue === "/" || lastValue === "+" || lastValue === "-" || lastValue === "*") {
        return;
    }
    resultsText.textContent = resultsText.textContent + "+";
    operator = "/";
});

/*equal button
take results string
grab first number and store in first number
grab operator and store in operator
grab second number and store in second number
computer and store as first number
keep going until there are no operators
*/
equalButton.addEventListener("click", function() {
    let resultsText = document.querySelector(".result");
    let resultArray = resultsText.textContent.split("");
    firstNumber = "";
    secondNumber = "";
    console.log(resultArray)
    let firstNumberComplete = false;
    resultArray.forEach((element) => {
        if(element === "/" || element === "+" || element === "-" || element === "*") {
            operator = element;
            firstNumberComplete = true;
        }
        if(firstNumberComplete === false) {
            firstNumber += element; 
        }
        if(firstNumberComplete === true && (element !== "/" && element !== "+" && element !== "-" && element !== "*")) {
            secondNumber += element; 
        }
        if(secondNumber !== "" && (element === "/" || element === "+" || element === "-" || element === "*")) {
            console.log(firstNumber);
            console.log(secondNumber);
            console.log(operator);
            firstNumber = operate(operator, parseInt(firstNumber), parseInt(secondNumber));
            secondNumber = "";
        }
        if(secondNumber !== "" && element === resultArray[resultArray.length - 1]) {
            firstNumber = operate(operator, parseInt(firstNumber), parseInt(secondNumber));
            secondNumber = "";
        }
    });
    resultsText.textContent = firstNumber;
    //console.log("First number is " + parseInt(firstNumber));
    //console.log("Operator is " + operator);
    //console.log("Second number is " + secondNumber);
    
});


/* Numbers */
sevenButton.addEventListener("click", function() {
    let resultsText = document.querySelector(".result");
    if(resultsText.textContent === "0") {
        resultsText.textContent = "7";
    }
    else {
        resultsText.textContent = resultsText.textContent + "7";
    }
});

eightButton.addEventListener("click", function() {
    let resultsText = document.querySelector(".result");
    if(resultsText.textContent === "0") {
        resultsText.textContent = "8";
    }
    else {
        resultsText.textContent = resultsText.textContent + "8";
    }
});

nineButton.addEventListener("click", function() {
    let resultsText = document.querySelector(".result");
    if(resultsText.textContent === "0") {
        resultsText.textContent = "9";
    }
    else {
        resultsText.textContent = resultsText.textContent + "9";
    }
});

fourButton.addEventListener("click", function() {
    let resultsText = document.querySelector(".result");
    if(resultsText.textContent === "0") {
        resultsText.textContent = "4";
    }
    else {
        resultsText.textContent = resultsText.textContent + "4";
    }
});

fiveButton.addEventListener("click", function() {
    let resultsText = document.querySelector(".result");
    if(resultsText.textContent === "0") {
        resultsText.textContent = "5";
    }
    else {
        resultsText.textContent = resultsText.textContent + "5";
    }
});

sixButton.addEventListener("click", function() {
    let resultsText = document.querySelector(".result");
    if(resultsText.textContent === "0") {
        resultsText.textContent = "6";
    }
    else {
        resultsText.textContent = resultsText.textContent + "6";
    }
});

oneButton.addEventListener("click", function() {
    let resultsText = document.querySelector(".result");
    if(resultsText.textContent === "0") {
        resultsText.textContent = "1";
    }
    else {
        resultsText.textContent = resultsText.textContent + "1";
    }
});

twoButton.addEventListener("click", function() {
    let resultsText = document.querySelector(".result");
    if(resultsText.textContent === "0") {
        resultsText.textContent = "2";
    }
    else {
        resultsText.textContent = resultsText.textContent + "2";
    }
});
threeButton.addEventListener("click", function() {
    let resultsText = document.querySelector(".result");
    if(resultsText.textContent === "0") {
        resultsText.textContent = "3";
    }
    else {
        resultsText.textContent = resultsText.textContent + "3";
    }
});
zeroButton.addEventListener("click", function() {
    let resultsText = document.querySelector(".result");
    if(resultsText.textContent === "0") {
        resultsText.textContent = "0";
    }
    else {
        resultsText.textContent = resultsText.textContent + "0";
    }
});