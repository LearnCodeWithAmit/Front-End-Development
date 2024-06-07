const display=document.querySelector(".display");
const buttons=document.querySelectorAll("button");
const specialChars=["%","*","/","+","="];
let output="";
let historyDisplay=document.querySelector(".history");


const calculate=(btnValue)=>{
    display.focus();
    if(btnValue === "=" && output !== ""){
        historyDisplay.innerHTML=output;
        output=eval(output.replace("%", "/100"));
    }
    else if(btnValue === "AC"){
        output="";
        historyDisplay.innerHTML=""
    }
    else if(btnValue=== "DEL"){
        output=output.toString().slice(0,-1);
    }
    else{
        if(output==="" && specialChars.includes(btnValue))
            return;
        output +=btnValue;
    }
    display.value=output;
}

for(let button of buttons)
    {
        button.addEventListener("click",(e)=>calculate(e.target.dataset.value));
    }