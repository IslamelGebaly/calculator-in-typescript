import { Calculator } from "./calculator";

export class Parser {
    private opStack : string[];
    private output : string[];

    constructor(){
        this.opStack = [];
        this.output = [];
    }

    infixToPostFix(exp : string) : void{
        this.output = [];
        const expArray = exp.split(" ");
        console.log(expArray);
        for(let i of expArray){
            if(/^\d+$/.test(i)){
                this.output.push(i)
            }
            else if(i == "("){
                this.opStack.push(i);
            }
            else if(i == ")"){
                while(this.opStack[this.opStack.length - 1] != "(" && this.opStack.length != 0){
                    let token : string | undefined = this.opStack.pop();
                    if(typeof(token) == "string" && token != "")
                        this.output.push(token);
                }

                this.opStack.pop();
            }
            else{
                while(this.opStack.length != 0){
                    if(this.notGreater(i, this.opStack[this.opStack.length - 1])){
                        let token : string | undefined = this.opStack.pop();
                        if(token != null && token != ""){
                            this.output.push(token);
                        }
                    }else
                        break
                }
                this.opStack.push(i);
            }
            }

            while(this.opStack.length != 0){
                let token : string | undefined = this.opStack.pop();
                if(token != null && token != ""){
                    this.output.push(token);
                }
        }
        console.log(this.output);
    }

    print() : void {
        console.log(this.output);
    } 

    private notGreater(op1 : string, op2: string) : boolean{
        if(op1 in ["+", "-"] && op2 in ["x", "÷"])
            return true;

        if(op1 in ["+", "-"] && op2 in ["+", "-"])
            return true;
        
        if(op1 in ["x", "÷"] && op2 in ["x", "÷"])
            return true;

        if(op1 == "^" && op2 == "^")
            return true;
            
        return false;
    }

    calculate(calculater : Calculator) : number{
        const stack : string[] = [];
        let temp : string | undefined;
        let operand1 : number | undefined;
        let operand2 : number | undefined;
        let ans: string | undefined;
        let result : number = -1;

        for(let i of this.output){
            if(/^\d+$/.test(i)){
                stack.push(i)
            }
            else{
                temp = stack.pop();
                if(typeof(temp) != "undefined")
                    operand2 = Number.parseFloat(temp);
                temp = stack.pop();
                if(typeof(temp) != "undefined")
                    operand1 = Number.parseFloat(temp);
                switch(i){
                    case "+":
                        if(typeof(operand1) != "undefined" && typeof(operand2) != "undefined")
                            ans = calculater.add(operand1, operand2).toString();
                            break;
                    case "-":
                        if(typeof(operand1) != "undefined" && typeof(operand2) != "undefined")
                            ans = calculater.subtract(operand1, operand2).toString();
                            break;
                    case "x":
                        if(typeof(operand1) != "undefined" && typeof(operand2) != "undefined")
                            ans = calculater.multiply(operand1, operand2).toString();
                            break;
                    case "÷":
                        if(typeof(operand1) != "undefined" && typeof(operand2) != "undefined")
                            ans = calculater.divide(operand1, operand2).toString();
                            break;
                    case "^":
                        if(typeof(operand1) != "undefined" && typeof(operand2) != "undefined")
                            ans = calculater.power(operand1, operand2).toString();
                            break;
                }
                if(typeof(ans) != "undefined"){
                    stack.push(ans);
                    console.log(ans);
                }
            }
        }

        temp = stack.pop();
        if(typeof(temp) != "undefined")
            result = Number.parseFloat(temp);

        return result;
    }
}