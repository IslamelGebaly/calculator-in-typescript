export class Parser {
    private opStack : string[];
    private output : string[];

    constructor(){
        this.opStack = [];
        this.output = [];
    }

    infixToPostFix(exp : string) : void{
        const expArray = exp.split(" ");
        
        for(let i in expArray){

            if(/^\d+$/.test(i)){
                this.output.push(i)
            }
            else if(i == "("){
                this.opStack.push(i);
            }
            else if(i == ")"){
                while(this.opStack[this.opStack.length - 1] != "(" && this.opStack.length != 0){
                    let token : string | undefined = this.opStack.pop();
                    if(typeof(token) == "string")
                        this.output.push(token);
                }

                this.opStack.pop();
            }
            else{
                while(this.opStack.length != 0){
                    if(this.notGreater(i, this.opStack[this.opStack.length - 1])){
                        let token : string | undefined = this.opStack.pop();
                        if(token != null){
                            this.output.push(token);
                        }
                    }else
                        break
                }
                this.opStack.push(i);
                console.log(this.opStack);
            }
            }

            while(this.opStack.length != 0){
                let token : string | undefined = this.opStack.pop();
                console.log(token)
                if(token != null){
                    this.output.push(token);
                }
        }
    }

    print() : void {
        console.log(this.output.join(""));
    } 

    notGreater(op1 : string, op2: string) : boolean{
        if(op1 in ["+", "-"] && op2 in ["x", "÷"])
            return true;

        if(op1 in ["+", "-"] && op2 in ["+", "-"])
            return true;
        
        if(op1 in ["x", "÷"] && op2 in ["x", "÷"])
            return true
            
        return false;
    }
}