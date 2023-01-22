class CalculatorUI{
    private isOverwritable : boolean;
    private isFloat : boolean;
    private isOutputSet : boolean; 

    private btns;
    private pointBtn;

    private inputField;

    constructor(btns : Element[], pointBtn: Element, inputField : Element){
        this.isOverwritable = true;
        this.isFloat = false;
        this.isOutputSet = false;

        this.btns = btns;
        this.pointBtn = pointBtn;
        this.inputField = inputField;
    }

    init(){
        this.btns?.forEach((btn) => {
            btn.addEventListener("click",  () => {
                if(this.inputField?.textContent != null){
                    if(this.isOverwritable){
                        this.inputField.textContent = "";
                        this.isOverwritable = false;
                    }
    
                    this.inputField.textContent = this.inputField?.textContent + btn.textContent;
                }
            });
        });

    
        
    this.pointBtn?.addEventListener("click", () => {
        if(!this.isFloat){
            this.isFloat = true;
            if(this.inputField?.textContent != null){
                this.isOverwritable = false;
                this.inputField.textContent = this.inputField.textContent + this.pointBtn?.textContent;
            }
        }
    });
    }
}

function main(){

}

main();