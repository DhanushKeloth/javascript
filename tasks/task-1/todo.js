const textinput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

const tasks = [];
const storedtasks= localStorage.getItem("tasks");
if(storedtasks){
    tasks.push(...JSON.parse(storedtasks));
    renderTasks();
}
function renderTasks(){
    taskList.innerHTML = "";
    tasks.forEach((task,index)=>{
        const li = document.createElement("li");
        li.textContent=task;
        const delbtn = document.createElement("button");
        delbtn.textContent="Delete";
        delbtn.classList.add("delete-btn");
        delbtn.addEventListener("click",()=>{
            console.log("delete clicked")
            tasks.splice(index,1);
            localStorage.setItem("tasks",JSON.stringify(tasks));
            renderTasks();
        })
        li.appendChild(delbtn);
        taskList.appendChild(li);
    })
}
addBtn.addEventListener("click",()=>{
    const task = textinput.value.trim();
    if(task){
        tasks.push(task);   
        localStorage.setItem("tasks",JSON.stringify(tasks));
        textinput.value="";
        renderTasks();
    }

})