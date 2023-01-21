"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculatorLogic = void 0;
const history_1 = require("./history");
class CalculatorLogic {
    constructor() {
        this.history = new history_1.History();
    }
    calculate(statement) {
    }
    switchOperator(operator, statement) {
    }
    getHistory() {
        return this.history;
    }
}
exports.CalculatorLogic = CalculatorLogic;
