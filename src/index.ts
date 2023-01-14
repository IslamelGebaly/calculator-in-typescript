function main(){
    const buttons = document.querySelector(".buttons-container")?.childNodes;
    const field = document.querySelector(".input");
    buttons?.forEach((btn) => {
        btn.addEventListener("click",  () => {
            if(field != null){
                field.textContent = btn.textContent;
            }
        })
    })
}

main();