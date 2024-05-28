let input=document.querySelector(".input");
let addBtn=document.querySelector(".btn");
let todoArea=document.querySelector(".todo-area");

showData()
addBtn.addEventListener("click",()=>{
    if(input.value===""){
        alert("type Something...")
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=input.value;
        todoArea.appendChild(li);

        let span=document.createElement("span");
        li.appendChild(span);
    }
    input.value=""
    saveData()
    scrollBar()
});

todoArea.addEventListener("click",(e)=>{
     if(e.target.tagName==="LI"){
        e.target.classList.toggle("js-checked");
        saveData()
     }
     else if(e.target.tagName==="SPAN")
        {
          e.target.parentElement.remove()
          saveData()
          scrollBar()
        }
},false);

function saveData(){
    localStorage.setItem("todo",todoArea.innerHTML);
}
function showData()
{
    todoArea.innerHTML=localStorage.getItem("todo");
    scrollBar()
}
 function scrollBar()
 {
    if(todoArea.scrollHeight>=200)
        {
            todoArea.style.setProperty("--scrollbar-width","7px");
        }
        else if(todoArea.scrollHeight<200)
        {
            todoArea.style.setProperty("--scrollbar-width","0px");
        }
 }