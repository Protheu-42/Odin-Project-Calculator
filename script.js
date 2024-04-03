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

// Calculator scripts for display
let actualDisplay = 0;
const display = document.querySelector('#display');
const btns = document.querySelectorAll('button');
btns.forEach((button) =>{button.addEventListener('click', function (e){
    if (e.currentTarget.id == 'equal'){
        console.log(e.currentTarget.id);
    }
    if (e.currentTarget.className == 'number-or-operator'){
        if (display.textContent === '0'){
            display.textContent = e.currentTarget.textContent;
            actualDisplay = display.textContent;
        }else {
            display.textContent += e.currentTarget.textContent;
            actualDisplay = display.textContent;
        }
    }    
})});

// Take actualDisplay and use as input for operate()

function result(actualDisplay) {
    let result = '';
    let first = '';
    let second = '';
    let operator = '';
    for (let i = 0; i != actualDisplay.length(); i++){
        if (Number.isInteger(Number(actualDisplay.charAt(i)))) {
            if (!operator) {
                first = first.concat(actualDisplay.charAt(i));
            }else {
                second = second.concat(actualDisplay.charAt(i));
            }
        }
        if (operator){
            result = operate(first, operator, second);
            first = result;
            result = 0;
            second = 0;
            operator = actualDisplay.charAt(i);
        }
        operator = display.charAt(i);
    }
    return result;
}