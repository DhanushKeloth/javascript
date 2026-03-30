const textinput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
renderTasks();  
function renderTasks(){
    taskList.innerHTML = "";
    tasks.forEach((task,index)=>{
        console.log(task,index)
        const li = document.createElement("li");

        

        //checkbox
        const checkbox = document.createElement("input");
        checkbox.type="checkbox";
        checkbox.checked=task.completed;

        checkbox.addEventListener("change",()=>{
            tasks[index].completed=checkbox.checked;
            
            localStorage.setItem("tasks",JSON.stringify(tasks));
             renderTasks();
        })

        const span = document.createElement("span");
        span.textContent=task.text;
        span.classList.add("task-text");
        if(task.completed){
            span.style.textDecoration="line-through";
        }
        span.appendChild(checkbox);
        li.appendChild(span);
        //btn container
        const btncontainer = document.createElement("div");
        btncontainer.classList.add("btn-container");
        


        const editbtn = document.createElement("button");
        editbtn.textContent="Edit";
        editbtn.classList.add("edit-btn");

        editbtn.addEventListener("click",(e)=>{
            span.contentEditable=true;
            span.focus();
            const newtext = prompt("Edit task:",task.text);
            if(newtext){
                tasks[index].text=newtext;
                localStorage.setItem("tasks",JSON.stringify(tasks));
                renderTasks();
            }

        })
        

        const delbtn = document.createElement("button");
        delbtn.textContent="Delete";
        delbtn.classList.add("delete-btn");

        delbtn.addEventListener("click",()=>{
            console.log("delete clicked")
            tasks.splice(index,1);
            localStorage.setItem("tasks",JSON.stringify(tasks));
            renderTasks();
        })


        // li.appendChild(editbtn);
        // li.appendChild(delbtn);
        li.appendChild(btncontainer);
        
        btncontainer.appendChild(editbtn);
        btncontainer.appendChild(delbtn);
        taskList.appendChild(li);
    })
}
addBtn.addEventListener("click",()=>{
    const task = textinput.value.trim();
    if(task){
        tasks.push({
            text:task,
            completed:false
        });   
        localStorage.setItem("tasks",JSON.stringify(tasks));
        console.log(tasks);
        textinput.value="";
        renderTasks();
    }

})
