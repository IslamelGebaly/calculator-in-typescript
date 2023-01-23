import { Calculator } from "./calculator.js";

let isOverwritable : boolean = true;
let isFloat : boolean = false;
let isOutputSet : boolean = false; 

function main(){
    const calc : Calculator = new Calculator();

    const inputField : Element | null = document.querySelector(".input");
    const opField : Element | null = document.querySelector(".output");

    const numberBtns : NodeListOf<HTMLElement> | null = document.querySelectorAll(".number-btn");

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
}

main();