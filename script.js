let firstNumber = 0;
let secondNumber = 0;
let operator = '+';

function operate(firstNumber, operator, secondNumber){
    switch (operator) {
        case '+':
            return add(firstNumber, secondNumber);
    
        case '-':
            return subtract(firstNumber, secondNumber);
        
        case '*':
            return multiply(firstNumber, secondNumber);

        case '/':
            return divide(firstNumber, secondNumber);
    }
};


// Basic Math Operations
function add(firstNumber , secondNumber){
    return firstNumber + secondNumber;
};

function subtract(firstNumber, secondNumber){
    return firstNumber - secondNumber;
};

function multiply(firstNumber, secondNumber){
    return firstNumber * secondNumber;
};

function divide(firstNumber, secondNumber){
    return secondNumber === 0 ? 0 : firstNumber / secondNumber;
};