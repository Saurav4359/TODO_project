  const textValue=document.querySelector("input");
 const AddTask=document.querySelector("button");
 
let ctr=1;

 function call() {
    const text=textValue.value.trim();
    if(!text){
  return alert("Enter the task");
  
    }
       
       
      const newNode=document.createElement("div");
      newNode.setAttribute("id","todo"+ctr);
       newNode.className="task-item";
   
       newNode.innerHTML="<div>"+ text +"</div><button onclick='deleteTask("+ctr+")'>Delete</button>" ;
        textValue.value="";
        document.querySelector("body").appendChild(newNode);
 
    
     ctr++;
 }
 
 AddTask.addEventListener("click",call);
 textValue.addEventListener("keypress",(e)=>
{
    if(e.key==="Enter") 
    {
        call();
    }
})

function deleteTask(ctr) {

const element=document.getElementById("todo"+ctr);
element.parentNode.removeChild(element);
    
}

 