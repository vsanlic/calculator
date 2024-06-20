let firstNum, operator, secondNum;

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

function operate(a, b, operation) {
    if (operation === 1) {
        return add(a, b);
    } else if (operation === 2) {
        return subtract(a, b);
    } else if (operation === 3) {
        return multiply(a, b);
    } else if (operation === 4) {
        return divide(a, b);
    } else {
        return "error";
    }
}