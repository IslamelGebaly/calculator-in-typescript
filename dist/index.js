"use strict";
function main() {
    const numberBtns = document.querySelectorAll(".number-btn");
    const pointBtn = document.querySelector("#pnt");
    const field = document.querySelector(".input");
    let isOverwritable = true;
    let isFloat = false;
    let fieldText;
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
}
main();
