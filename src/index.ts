import { Calculator } from "./calculator.js";

let isOverwritable : boolean = true;
let isDecimal : boolean = false;
let isOutputSet : boolean = false; 

let operand1 : number = 0;
let operator : string | null = "";

function main(){
    const calc : Calculator = new Calculator();

    const inputField : Element | null = document.querySelector(".input");
    const opField : Element | null = document.querySelector(".output");

    const numberBtns : NodeListOf<HTMLElement> | null = document.querySelectorAll(".number-btn");
    const pointBtn : Element | null = document.querySelector("#pnt");

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

    initOperationButtons(calc, inputField, opField);
    
}

function initOperationButtons(calculator : Calculator, inputField : Element | null, opField : Element | null,){
    const opBtns : NodeListOf<Element> | null = document.querySelectorAll(".operator-btn");

    opBtns.forEach((btn) =>{
        btn.addEventListener("click", () =>{
            if(opField?.textContent != null && inputField?.textContent != null){
                let result : number = Number.parseFloat(inputField.textContent);

                if(!isOutputSet){
                    operand1 = Number.parseFloat(inputField.textContent);
                    isOutputSet = true;
                }else {
                    let operand2 : number = Number.parseFloat(inputField.textContent);
                    switch(operator){
                        case "+":
                            result = calculator.add(operand1, operand2);
                            break;
                        case "-":
                            result = calculator.subtract(operand1, operand2);
                            break;
                        case "x":
                            result = calculator.multiply(operand1, operand2);
                            break;
                        case "÷":
                            result = calculator.divide(operand1, operand2);
                            break;
                    }
                    operand1 = result;

                }

                if(!isOverwritable){
                    resetInput();
                    opField.textContent += (inputField.textContent + btn.textContent);
                    operator = btn.textContent;
                    inputField.textContent = result.toString();
                }
            }
        });
    });
}

function resetInput(){
    isDecimal = false;
    isOverwritable = true;
}

main();