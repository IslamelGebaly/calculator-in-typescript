"use strict";
class CalculatorUI {
    constructor() {
        this.numberBtns = document.querySelectorAll(".number-btn");
        this.pointBtn = document.querySelector('#pnt');
        this.addBtn = document.querySelector("#plus");
        this.subBtn = document.querySelector("#minus");
        this.multBtn = document.querySelector("#mult");
        this.divBtn = document.querySelector("#div");
        this.field = document.querySelector(".input");
        this.outputField = document.querySelector(".output");
        this.isOverwritable = true;
        this.isFloat = false;
        this.isOutputSet = false;
        this.finalValue = 0;
        this.fieldText = "";
    }
    init() {
        var _a, _b;
        (_a = this.numberBtns) === null || _a === void 0 ? void 0 : _a.forEach((btn) => {
            btn.addEventListener("click", () => {
                var _a;
                if (((_a = this.field) === null || _a === void 0 ? void 0 : _a.textContent) != null) {
                    if (this.isOverwritable) {
                        this.field.textContent = "";
                        this.isOverwritable = false;
                    }
                    this.fieldText = this.field.textContent + btn.textContent;
                    this.field.textContent = this.fieldText;
                }
            });
        });
        (_b = this.pointBtn) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
            var _a, _b;
            if (!this.isFloat) {
                this.isFloat = true;
                if (((_a = this.field) === null || _a === void 0 ? void 0 : _a.textContent) != null) {
                    this.isOverwritable = false;
                    this.fieldText = this.field.textContent + ((_b = this.pointBtn) === null || _b === void 0 ? void 0 : _b.textContent);
                    this.field.textContent = this.fieldText;
                }
            }
        });
    }
}
function main() {
    const calculator = new CalculatorUI();
    calculator.init();
}
main();
