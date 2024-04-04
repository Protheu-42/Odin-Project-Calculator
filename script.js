let result = '';
let firstNumber = '0';
let secondNumber = '';
let operator = '';

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

// Calculator scripts for display
const display = document.querySelector('#display');
const btns = document.querySelectorAll('button');
btns.forEach((button) =>{button.addEventListener('click', function (e){
    // Number is clicked
    if (e.currentTarget.className == 'number') {
        if (display.textContent == '0') {
            display.textContent = e.currentTarget.textContent;
            firstNumber = e.currentTarget.textContent;
        }else if (!operator){
            display.textContent += e.currentTarget.textContent;
            firstNumber += e.currentTarget.textContent;
        }else {
            display.textContent += e.currentTarget.textContent;
            secondNumber += e.currentTarget.textContent;
        }
    }
    // Operator is clicked
    else if (e.currentTarget.className == 'operator') {
        if(operator){
            result = operate(Number(firstNumber), operator, Number(secondNumber));
            firstNumber = result;
            secondNumber = '';
            operator = e.currentTarget.textContent;
            display.textContent = result+operator;
        }else {
        operator = e.currentTarget.textContent;
        display.textContent += operator;
        }
    }
    // Equal is clicked
    else if (e.currentTarget.id == 'equal') {
        if (operator && secondNumber) {
            result = operate(Number(firstNumber), operator, Number(secondNumber));
            firstNumber = result;
            secondNumber = '';
            operator = '';
            display.textContent = result;  
        }
    }
    
    // Clear is clicked
    else if (e.currentTarget.id == 'clear') {
        display.textContent = '0';
        result = '';
        firstNumber = '';
        secondNumber = '';
        operator = '';
    }

    // Decimal is clicked
    else if (e.currentTarget.id == 'decimal') {
        if (!operator && !firstNumber.includes('.')) {
            display.textContent += e.currentTarget.textContent;
            firstNumber += e.currentTarget.textContent;
        } else if (operator && !secondNumber.includes('.')) {
            display.textContent += e.currentTarget.textContent;
            secondNumber += e.currentTarget.textContent;
        }
    }
})});