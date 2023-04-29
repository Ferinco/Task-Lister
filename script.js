const formSection = document.getElementById("form-section");
const taskList = document.getElementById("task-lists");
let tasks = [];
const form = document.createElement("div");
form.id ="form"
form.innerHTML = `
<input type="text" id="task-input" placeholder="input your task here...">
<button type="submit" id="add-to-tasks">Add</button>`;
formSection.appendChild(form);
const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-to-tasks");


warningPop=()=>{
//     const popSection = document.getElementById(pop-up);
//    const popMsg = document.createElement("div")
//     popMsg.innerHTML = `
//     <p>whatosayyyyyyy</p>`
// popSection.appendChild(popMsg);
alert("moneybagyo")
}

addBtn.addEventListener("click", (e) => {
if(tasks.length < 8){
    const taskName = taskInput.value.trim();
    if (taskName) {
      tasks.push(taskName);
      taskInput.value = "";
      showTasks();
    }
}
else{
    warningPop()
}
});
showTasks = () => {
  taskList.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    const taskName = tasks[i];
    const task = document.createElement("div");
    task.id ="task";
    task.textContent = taskName;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "fa fa-times";
    deleteBtn.id = "deleteBtn";
    deleteBtn.addEventListener("click", (e) => {
      tasks.splice(i, 1);
      showTasks();
    });
    task.appendChild(deleteBtn);
    taskList.appendChild(task);
  }
};
