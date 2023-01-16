function main(){
    const numberBtns = document.querySelectorAll(".number-btn");
    const pointBtn = document.querySelector("#pnt");
    const field = document.querySelector(".input");

    let isOverwritable : boolean = true;
    let isFloat : boolean = false;
    let fieldText : string;

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
}

main();