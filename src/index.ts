class CalculatorUI{
    private numberBtns;
    private pointBtn;
    
    private addBtn;
    private subBtn;
    private multBtn;
    private divBtn;

    private field;
    private outputField;

    private isOverwritable : boolean;
    private isFloat : boolean;
    private isOutputSet : boolean; 

    private fieldText : string;
    private finalValue : number;

    constructor(){
        this.numberBtns = document.querySelectorAll(".number-btn");
        this.pointBtn = document.querySelector('#pnt');

        this.addBtn = document.querySelector("#plus");
        this.subBtn = document.querySelector("#minus");
        this.multBtn = document.querySelector("#mult");
        this.divBtn = document.querySelector("#div");

        this.field = document.querySelector(".input");
        this.outputField = document.querySelector(".output");

        this.isOverwritable = true;
        this.isFloat = false;
        this.isOutputSet = false;

        this.finalValue = 0;
        this.fieldText = "";
    }

    init(){
        this.numberBtns?.forEach((btn) => {
            btn.addEventListener("click",  () => {
                if(this.field?.textContent != null){
                    if(this.isOverwritable){
                        this.field.textContent = "";
                        this.isOverwritable = false;
                    }
    
                    this.fieldText = this.field.textContent + btn.textContent;
                    this.field.textContent = this.fieldText;
                }
            })
        });
        
    this.pointBtn?.addEventListener("click", () => {
        if(!this.isFloat){
            this.isFloat = true;
            if(this.field?.textContent != null){
                this.isOverwritable = false;
                this.fieldText = this.field.textContent + this.pointBtn?.textContent;
                this.field.textContent = this.fieldText;
            }
        }
    });
    }
}

function main(){

    const calculator : CalculatorUI = new CalculatorUI();

    calculator.init();
}

main();