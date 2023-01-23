import { Calculator } from "./calculator.js";
let isOverwritable = true;
let isDecimal = false;
let isOutputSet = false;
let operand1 = 0;
let operator = "";
function main() {
    const calc = new Calculator();
    const inputField = document.querySelector(".input");
    const opField = document.querySelector(".output");
    const numberBtns = document.querySelectorAll(".number-btn");
    const pointBtn = document.querySelector("#pnt");
    numberBtns?.forEach((btn) => {
        btn.addEventListener("click", () => {
            if (inputField?.textContent != null)
                if (isOverwritable) {
                    inputField.textContent = btn.textContent;
                    isOverwritable = false;
                }
                else
                    inputField.textContent += btn.textContent;
        });
    });
    pointBtn?.addEventListener("click", () => {
        if (inputField?.textContent != null) {
            if (!isDecimal) {
                inputField.textContent += ".";
                isDecimal = true;
                isOverwritable = false;
            }
        }
    });
    initOperationButtons(calc, inputField, opField);
}
function initOperationButtons(calculator, inputField, opField) {
    const opBtns = document.querySelectorAll(".operator-btn");
    opBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            if (opField?.textContent != null && inputField?.textContent != null) {
                let result = Number.parseFloat(inputField.textContent);
                if (!isOutputSet) {
                    operand1 = Number.parseFloat(inputField.textContent);
                    isOutputSet = true;
                }
                else {
                    let operand2 = Number.parseFloat(inputField.textContent);
                    switch (operator) {
                        case "+":
                            result = calculator.add(operand1, operand2);
                            break;
                        case "-":
                            result = calculator.subtract(operand1, operand2);
                            break;
                        case "x":
                            result = calculator.multiply(operand1, operand2);
                            break;
                        case "÷":
                            result = calculator.divide(operand1, operand2);
                            break;
                    }
                    operand1 = result;
                }
                if (!isOverwritable) {
                    resetInput();
                    opField.textContent += (inputField.textContent + btn.textContent);
                    operator = btn.textContent;
                    inputField.textContent = result.toString();
                }
            }
        });
    });
}
function resetInput() {
    isDecimal = false;
    isOverwritable = true;
}
main();
