let screen = document.getElementById("screen")
let buttons = document.querySelectorAll("button")
console.log(buttons)
let screenValue = "";
for(item of buttons){
    item.addEventListener("click",(e)=>{
         buttonText = e.target.innerText;
        console.log("button text is ", buttonText)
        if(buttonText == 'x'){
            buttonText = '*';
            screenValue += buttonText
            screen.value = screenValue
        }
        else if (buttonText == "CE"){
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == "="){
            screen.value = eval(screenValue)
        }
        // else if(screen.value = eval(screenValue)){
        //     screen.value = eval(screenValue)
        // }
        else {
            screenValue += buttonText
            screen.value = screenValue
        }
        
    })
}
