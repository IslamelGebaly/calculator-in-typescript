import { Calculator } from "./calculator.js";
let isOverwritable = true;
let isFloat = false;
let isOutputSet = false;
function main() {
    const calc = new Calculator();
    const inputField = document.querySelector(".input");
    const opField = document.querySelector(".output");
    const numberBtns = document.querySelectorAll(".number-btn");
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
}
main();
