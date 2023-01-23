import { Calculator } from "./calculator.js";
let isOverwritable = true;
let isDecimal = false;
let isOutputSet = false;
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
    initOperationButtons(inputField, opField);
}
function initOperationButtons(inputField, opField) {
    const plusBtn = document.querySelector('#plus');
    const minusBtn = document.querySelector('#minus');
    const multBtn = document.querySelector('#mult');
    const divBtn = document.querySelector('#div');
    plusBtn?.addEventListener("click", () => {
        if (opField?.textContent != null) {
            if (!isOverwritable) {
                resetInput();
                opField.textContent += (inputField?.textContent + "+");
            }
        }
    });
    minusBtn?.addEventListener("click", () => {
        if (opField?.textContent != null) {
            if (!isOverwritable) {
                resetInput();
                opField.textContent += (inputField?.textContent + "-");
            }
        }
    });
    multBtn?.addEventListener("click", () => {
        if (opField?.textContent != null) {
            if (!isOverwritable) {
                resetInput();
                opField.textContent += (inputField?.textContent + "x");
            }
        }
    });
    divBtn?.addEventListener("click", () => {
        if (opField?.textContent != null) {
            if (!isOverwritable) {
                resetInput();
                opField.textContent += (inputField?.textContent + "÷");
            }
        }
    });
}
function resetInput() {
    isDecimal = false;
    isOverwritable = true;
}
main();
