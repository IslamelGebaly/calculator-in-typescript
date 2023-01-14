"use strict";
function main() {
    var _a;
    const buttons = (_a = document.querySelector(".buttons-container")) === null || _a === void 0 ? void 0 : _a.childNodes;
    const field = document.querySelector(".input");
    buttons === null || buttons === void 0 ? void 0 : buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            if (field != null) {
                field.textContent = btn.textContent;
            }
        });
    });
}
main();
