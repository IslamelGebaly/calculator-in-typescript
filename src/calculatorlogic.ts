import { History } from "./history";

export class CalculatorLogic {
    private operand1 : number;
    private operand2 : number;
    private result : number;
    private operator : string;
    private isDecimal : boolean;
    private isError : boolean;
    private isEquals : boolean;
    private history : History;

    constructor(){
        this.operand1 = 0;
        this.operand2 = 0;
        this.result = 0;
        this.operator = "";
        this.history = new History();
        this.isDecimal = false;
        this.isError = false;
        this.isEquals = false;
    }

    add(operand1 : number, operand2 : number) : number{
        this.operand1 = operand1;
        this.operand2 = operand2;
        this.operator = "+";
        this.result = operand1 + operand2;
        return this.result;
    }

    subtract(operand1 : number, operand2 : number) : number{
        this.operand1 = operand1;
        this.operand2 = operand2;
        this.operator = "-";
        this.result = operand1 - operand2;
        return this.result;
    }

    multiply(operand1 : number, operand2 : number) : number{
        this.operand1 = operand1;
        this.operand2 = operand2;
        this.operator = "*";
        this.result = operand1 * operand2
        return this.result;
    }

    divide(operand1 : number, operand2 : number) : number{
        this.operand1 = operand1;
        this.operand2 = operand2;
        this.operator = "/";
        this.result = operand1 / operand2;
        return this.result;
    }

    squareRoot(operand : number) : number{
        this.operand1 = operand
        this.operand2 = 0;
        this.operator = '√'
        this.result = Math.sqrt(operand);
        return Math.sqrt(operand);
    }

    square(operand : number) : number{
        this.operand1 = operand
        this.operand2 = 2;
        this.operator = '^'
        this.result = Math.sqrt(operand);
        return operand ^ 2;
    }

    clear(){
        this.operand1 = 0;
        this.operand2 = 0;
        this.result = 0;
        this.operator = "";
        this.isDecimal = false;
        this.isError = false;
        this.isEquals = false;
    }

    //Save history
    saveHistory(){

    }

    recallHistory(){

    }


}