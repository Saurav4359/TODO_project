 const text=document.getElementById("text");
 const button=document.getElementById("AddTask");
 const tasklist=document.getElementById("tasklist");


 button.addEventListener("click",() => {
    const taskValue=text.value.trim();
    if(!taskValue)
        return alert("Enter the Task first");

    const li=document.createElement("li");
  li.textContent=taskValue;

  tasklist.append(li);
  text.value="";


 });