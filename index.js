 const textValue=document.getElementById("textValue");
 const AddTask=document.getElementById("AddTask");
 const taskList=document.getElementById("taskList");


 function call() {
    
    if(!textValue.value)
        alert("Enter the task");

      const newNode=document.createElement("li");
      newNode.

     
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