function main(){
    const numberBtns = document.querySelectorAll(".number-btn");
    const pointBtn = document.querySelector("#pnt");

    const addBtn = document.querySelector("#plus");
    const subBtn = document.querySelector("#minus");
    const multBtn = document.querySelector("#mult");
    const divBtn = document.querySelector("#div");

    const field = document.querySelector(".input");
    const outputField = document.querySelector(".output");

    let isOverwritable : boolean = true;
    let isFloat : boolean = false;
    let isOutputSet : boolean = false;

    let fieldText : string;
    let finalValue : number = 0;


    numberBtns?.forEach((btn) => {
        btn.addEventListener("click",  () => {
            if(field?.textContent != null){
                if(isOverwritable){
                    field.textContent = "";
                    isOverwritable = false;
                }

                fieldText = field.textContent + btn.textContent;
                field.textContent = fieldText;
            }
        })
    });

    pointBtn?.addEventListener("click", () => {
        if(!isFloat){
            isFloat = true;
            if(field?.textContent != null){
                isOverwritable = false;
                fieldText = field.textContent + pointBtn.textContent;
                field.textContent = fieldText;
            }
        }
    });

    addBtn?.addEventListener("click", () => {
        isOverwritable = true;
        if(!isOutputSet){
            finalValue = Number.parseFloat(fieldText);
            isOutputSet = true;
        }
        else
            finalValue += Number.parseFloat(fieldText);
        if(outputField != null)
            outputField.textContent = finalValue.toString();
        
    });

    subBtn?.addEventListener("click", () => {
        isOverwritable = true;

        if(!isOutputSet){
            finalValue = Number.parseFloat(fieldText);
            isOutputSet = true;
        }
        else
            finalValue -= Number.parseFloat(fieldText);

        if(outputField != null)
            outputField.textContent = finalValue.toString();
    });

    multBtn?.addEventListener("click", () => {
        isOverwritable = true;

        if(!isOutputSet){
            finalValue = Number.parseFloat(fieldText);
            isOutputSet = true;
        }
        else
            finalValue *= Number.parseFloat(fieldText);

        if(outputField != null)
            outputField.textContent = finalValue.toString();
    });

    divBtn?.addEventListener("click", () => {
        isOverwritable = true;

        if(!isOutputSet){
            finalValue = Number.parseFloat(fieldText);
            isOutputSet = true;
        }
        else
            finalValue /= Number.parseFloat(fieldText);

        if(outputField != null)
            outputField.textContent = finalValue.toString();
    });
}

main();