let previousNum = "";
let currentNum = "";
let operator = "";

document.addEventListener("DOMContentLoaded", () => {
    let screen = document.querySelector(".screen");
    let numbers = document.querySelectorAll(".number-button");
    let operators = document.querySelectorAll(".operator-button");
    let clear = document.querySelector("#clear-button");
    let decimal = document.querySelector("#decimal-button");
    let equalTo = document.querySelector("#equal-to-button");
    
    screen.textContent = "0";

    numbers.forEach((number) => number.addEventListener("click", (e) => {
        populateNumbers(e.target.textContent);
        screen.textContent = currentNum;
    }))

    operators.forEach((op) => op.addEventListener("click", (e) => {
        populateOperators(e.target.textContent);
        screen.textContent = operator;
    }))

    equalTo.addEventListener("click", () => {
        if (currentNum != "" && previousNum != "") {
            operate();
            if (previousNum <= 13) {
                screen.textContent = previousNum;
            } else if (previousNum > 13) {
                screen.textContent = previousNum.slice(0, 13);
            }
            
        }
    })

    clear.addEventListener("click", () => {
        previousNum = "";
        currentNum = "";
        operator = "";
        screen.textContent = "0";
    })

    decimal.addEventListener("click", () => {
        addDecimal();
    })
})

function populateNumbers(num) {
    if (currentNum.length <= 13) {
        currentNum += num;
    }
}

function populateOperators(op) {
    operator = op;
    previousNum = currentNum;
    currentNum = "";
}

function operate() {
    previousNum = Number(previousNum);
    currentNum = Number(currentNum);

    if (operator === "+") {
        previousNum += currentNum;
        currentNum = previousNum;
    } else if (operator === "-") {
        previousNum -= currentNum;
        currentNum = previousNum;
    } else if (operator === "x") {
        previousNum *= currentNum;
        currentNum = previousNum;
    } else {
        if (currentNum <= 0) {
            previousNum = "Error";
            screen.textContent = previousNum;
            return;
        }
        previousNum /= currentNum;
        currentNum = previousNum;
    }

    previousNum = roundNum(previousNum);
    
    previousNum = previousNum.toString();
    currentNum = currentNum.toString();
}

function roundNum(num) {
    return Math.round(num * 1000) / 1000;
}

function addDecimal() {
    if(!currentNum.includes(".")) {
        currentNum += ".";
    }
}