"use strict";
function main() {
    const numberBtns = document.querySelectorAll(".number-btn");
    const pointBtn = document.querySelector("#pnt");
    const addBtn = document.querySelector("#plus");
    const subBtn = document.querySelector("#minus");
    const multBtn = document.querySelector("#mult");
    const divBtn = document.querySelector("#div");
    const field = document.querySelector(".input");
    const outputField = document.querySelector(".output");
    let isOverwritable = true;
    let isFloat = false;
    let isOutputSet = false;
    let fieldText;
    let finalValue = 0;
    numberBtns === null || numberBtns === void 0 ? void 0 : numberBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            if ((field === null || field === void 0 ? void 0 : field.textContent) != null) {
                if (isOverwritable) {
                    field.textContent = "";
                    isOverwritable = false;
                }
                fieldText = field.textContent + btn.textContent;
                field.textContent = fieldText;
            }
        });
    });
    pointBtn === null || pointBtn === void 0 ? void 0 : pointBtn.addEventListener("click", () => {
        if (!isFloat) {
            isFloat = true;
            if ((field === null || field === void 0 ? void 0 : field.textContent) != null) {
                isOverwritable = false;
                fieldText = field.textContent + pointBtn.textContent;
                field.textContent = fieldText;
            }
        }
    });
    addBtn === null || addBtn === void 0 ? void 0 : addBtn.addEventListener("click", () => {
        isOverwritable = true;
        if (!isOutputSet) {
            finalValue = Number.parseFloat(fieldText);
            isOutputSet = true;
        }
        else
            finalValue += Number.parseFloat(fieldText);
        if (outputField != null)
            outputField.textContent = finalValue.toString();
    });
    subBtn === null || subBtn === void 0 ? void 0 : subBtn.addEventListener("click", () => {
        isOverwritable = true;
        if (!isOutputSet) {
            finalValue = Number.parseFloat(fieldText);
            isOutputSet = true;
        }
        else
            finalValue -= Number.parseFloat(fieldText);
        if (outputField != null)
            outputField.textContent = finalValue.toString();
    });
    multBtn === null || multBtn === void 0 ? void 0 : multBtn.addEventListener("click", () => {
        isOverwritable = true;
        if (!isOutputSet) {
            finalValue = Number.parseFloat(fieldText);
            isOutputSet = true;
        }
        else
            finalValue *= Number.parseFloat(fieldText);
        if (outputField != null)
            outputField.textContent = finalValue.toString();
    });
    divBtn === null || divBtn === void 0 ? void 0 : divBtn.addEventListener("click", () => {
        isOverwritable = true;
        if (!isOutputSet) {
            finalValue = Number.parseFloat(fieldText);
            isOutputSet = true;
        }
        else
            finalValue /= Number.parseFloat(fieldText);
        if (outputField != null)
            outputField.textContent = finalValue.toString();
    });
}
main();
