import { History } from "./history";

export class CalculatorLogic {
    private history : History;

    constructor(){
        this.history = new History();
    }

    calculate(statement : string){

    }

    switchOperator(operator : string, statement : string){

    }

    getHistory(){
        return this.history;
    }
}