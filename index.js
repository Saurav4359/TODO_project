 const textValue=document.getElementById("textValue");
 const AddTask=document.getElementById("AddTask");
 const taskList=document.getElementById("taskList");


 function call() {
    const text=textValue.value;
    if(!text){
  return alert("Enter the task");
  
    }
       

      const newNode=document.createElement("li");
      taskList.appendChild(newNode);
       newNode.textContent=text;
       textValue.value="";

     
 }
 
 AddTask.addEventListener("click",call);
 textValue.addEventListener("keypress",(e)=>
{
    if(e.key==="Enter")
    {
        call();
    }
})

function deleteTask() {

}

//AddTask.addEventListener("click",deleteTask);