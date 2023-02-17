import { History } from "./history.js";
export class Calculator {
    operand1;
    operand2;
    result;
    operator;
    isDecimal;
    isError;
    isEquals;
    history;
    constructor() {
        this.operand1 = 0;
        this.operand2 = 0;
        this.result = 0;
        this.operator = "";
        this.history = new History();
        this.isDecimal = false;
        this.isError = false;
        this.isEquals = false;
    }
    add(operand1, operand2) {
        this.operand1 = operand1;
        this.operand2 = operand2;
        this.operator = "+";
        this.result = operand1 + operand2;
        return this.result;
    }
    subtract(operand1, operand2) {
        this.operand1 = operand1;
        this.operand2 = operand2;
        this.operator = "-";
        this.result = operand1 - operand2;
        return this.result;
    }
    multiply(operand1, operand2) {
        this.operand1 = operand1;
        this.operand2 = operand2;
        this.operator = "*";
        this.result = operand1 * operand2;
        return this.result;
    }
    divide(operand1, operand2) {
        this.operand1 = operand1;
        this.operand2 = operand2;
        this.operator = "/";
        if (operand2 == 0)
            return "error";
        this.result = operand1 / operand2;
        return this.result;
    }
    squareRoot(operand) {
        this.operand1 = operand;
        this.operand2 = 0;
        this.operator = '√';
        this.result = Math.sqrt(operand);
        return Math.sqrt(operand);
    }
    power(operand1, operand2) {
        this.operand1 = operand1;
        this.operand2 = operand2;
        this.operator = "^";
        this.result = operand1 ** operand2;
        return this.result;
    }
    getResult() {
        return this.result;
    }
    getOperator() {
        return this.operator;
    }
    clear() {
        this.operand1 = 0;
        this.operand2 = 0;
        this.result = 0;
        this.operator = "";
        this.isDecimal = false;
        this.isError = false;
        this.isEquals = false;
    }
    //Save history
    saveHistory() {
    }
    recallHistory() {
    }
}
