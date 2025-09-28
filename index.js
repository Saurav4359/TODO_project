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
      const deleteButton=document.createElement("button");
     newNode.appendChild(deleteButton);
     deleteButton.textContent="delete";
     
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