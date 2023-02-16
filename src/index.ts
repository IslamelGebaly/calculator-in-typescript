import { Calculator } from "./calculator.js";
import { Parser } from "./parser.js";

let isOverwritable : boolean = true;
let isDecimal : boolean = false;
let isOutputSet : boolean = false; 


function main(){
    const calc : Calculator = new Calculator();
    const parser : Parser = new Parser();
    const inputField : Element | null = document.querySelector(".input");
    const opField : Element | null = document.querySelector(".output");

    const numberBtns : NodeListOf<HTMLElement> | null = document.querySelectorAll(".number-btn");
    const pointBtn : Element | null = document.querySelector("#pnt");
    const equalBtn : Element | null = document.querySelector("#eqls");

    numberBtns?.forEach((btn) => {
        btn.addEventListener("click" , () =>{
        if(inputField?.textContent != null)
            if(isOverwritable){
                inputField.textContent = btn.textContent;
                isOverwritable = false;
            }
            else
                inputField.textContent += btn.textContent;
        });
    });

    pointBtn?.addEventListener("click", () => {
        if(inputField?.textContent != null){
            if(!isDecimal){
                inputField.textContent += ".";
                isDecimal = true;
                isOverwritable = false;
            }
        }
    });

    initOperationButtons(calc, parser, inputField, opField);
    setupClearButtons(calc, inputField, opField);

    equalBtn?.addEventListener("click", () => {
        let operand2 : number;
        let result : number | string;
        if(inputField?.textContent != null && opField?.textContent != null){
            opField.textContent += inputField.textContent;
            parser.infixToPostFix(opField.textContent);
            result = parser.calculate(calc);

            inputField.textContent = result.toString();
            opField.textContent += ` = ${result}`;

            resetInput();
            isOutputSet = false;
        }
    });
}

function initOperationButtons(calc : Calculator, parser: Parser,inputField : Element | null, opField : Element | null){
    const opBtns : NodeListOf<Element> | null = document.querySelectorAll(".operator-btn");

    opBtns.forEach((btn) =>{
        btn.addEventListener("click", () =>{
            if(opField?.textContent != null && inputField?.textContent != null){
                let result : number | string = Number.parseFloat(inputField.textContent);

                if(!isOutputSet){
                    opField.textContent = "";
                    opField.textContent += inputField.textContent;
                    isOutputSet = true;
                }else {
                    opField.textContent += Number.parseFloat(inputField.textContent);
                    parser.infixToPostFix(opField.textContent);
                    result = parser.calculate(calc);
                }

                if(!isOverwritable){
                    resetInput();
                    opField.textContent += (btn.textContent);
                    if(btn.textContent != null)
                    inputField.textContent = result.toString();
                }
            }
        });
    });
}

function setupClearButtons(calc : Calculator, inputField : Element | null, opField : Element | null){
    const ceBtn : Element | null = document.querySelector('#ce');
    const cBtn : Element | null = document.querySelector('#c');

    ceBtn?.addEventListener("click", () => {
        isOverwritable = true;
        isDecimal = false;

        if(inputField?.textContent != null)
                inputField.textContent = "0";
    });

    cBtn?.addEventListener("click", () => {
        isOverwritable = true;
        isOutputSet = false;
        isDecimal = false;

        if(inputField?.textContent != null)
            inputField.textContent = "0";
        
        if(opField?.textContent != null)
            opField.textContent = "";
    });
}


function resetInput(){
    isDecimal = false;
    isOverwritable = true;
}

function calculate(calc : Calculator, operand1 : number, operand2 : number, operator : string | null) : number | string{
    let result : number | string = 0;
    switch(operator){
        case "+":
            result = calc.add(operand1, operand2);
            break;
        case "-":
            result = calc.subtract(operand1, operand2);
            break;
        case "x":
            result = calc.multiply(operand1, operand2);
            break;
        case "÷":
            result = calc.divide(operand1, operand2);
            if(result == 'error'){
                resetInput()
                result = "Error can't divide by zero";
            }
            break;
    }

    return result;
}

main();