import { Calculator } from "./calculator.js";

let isOverwritable : boolean = true;
let isDecimal : boolean = false;
let isOutputSet : boolean = false; 

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

    initOperationButtons(inputField, opField);
    
}

function initOperationButtons(inputField : Element | null, opField : Element | null){
    const plusBtn : Element | null = document.querySelector('#plus');
    const minusBtn : Element | null = document.querySelector('#minus');
    const multBtn : Element | null = document.querySelector('#mult');
    const divBtn : Element | null = document.querySelector('#div');

    plusBtn?.addEventListener("click", () => {
        if(opField?.textContent != null){
            if(!isOverwritable){
                resetInput();
                opField.textContent += (inputField?.textContent + "+");
            } 
        }
    });

    minusBtn?.addEventListener("click", () => {
        if(opField?.textContent != null){
            if(!isOverwritable){
                resetInput();
                opField.textContent += (inputField?.textContent + "-");
            } 
        }
    });

    multBtn?.addEventListener("click", () => {
        if(opField?.textContent != null){
            if(!isOverwritable){
                resetInput();
                opField.textContent += (inputField?.textContent + "x");
            } 
        }
    });

    divBtn?.addEventListener("click", () => {
        if(opField?.textContent != null){
            if(!isOverwritable){
                resetInput();
                opField.textContent += (inputField?.textContent + "÷");
            } 
        }
    });
}

function resetInput(){
    isDecimal = false;
    isOverwritable = true;
}

main();