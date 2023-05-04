const formSection = document.getElementById("form-section");
const taskList = document.getElementById("task-lists");
let tasks = [];
const form = document.createElement("div");
form.id = "form";
form.innerHTML = `
<input type="text" id="task-input" placeholder="input your task here...">
<button type="submit" id="add-to-tasks">Add</button>`;
formSection.appendChild(form);
const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-to-tasks");
const buttons = document.getElementById("actions");

const createScheduleBtn = document.createElement("button");
createScheduleBtn.id = "create-btn";
createScheduleBtn.textContent = "create schedule";
buttons.appendChild(createScheduleBtn);

const clearListBtn = document.createElement("button");
clearListBtn.id = "clear-btn";
clearListBtn.textContent = " clear list";
buttons.appendChild(clearListBtn);
buttons.style.marginLeft = "-3000px";
buttons.style.transition = "0.6s";

const popUpDiv = document.getElementById("pop-up");
popUp = () => {
  const popUpMsg = document.createElement("div");
  popUpMsg.innerHTML = `<p>sorry, you have reached limit for number of tasks.</p>
<button onclick="backToNormal()" >Ok</button>`;
  popUpMsg.id = "pop-up-msg";
  popUpDiv.appendChild(popUpMsg);
  taskList.style.filter = "blur(3px)";
  buttons.style.filter = "blur(3px)";
  document.querySelector(".instruction").style.filter = "blur(3px)";
  formSection.style.filter = "blur(3px)";
  document.querySelector(".item-monitor").style.filter = "blur(3px)";
  backToNormal = () => {
    popUpDiv.removeChild(popUpMsg);
    taskList.style.filter = "blur(0)";
    buttons.style.filter = "blur(0)";
    document.querySelector(".instruction").style.filter = "blur(0)";
    formSection.style.filter = "blur(0)";
    document.querySelector(".item-monitor").style.filter = "blur(0)";
  };
};

addBtn.addEventListener("click", (e) => {
  if (tasks.length < 7) {
    const taskName = taskInput.value.trim();
    if (taskName) {
      tasks.push(taskName);
      taskInput.value = "";
      document.querySelector(".item-monitor").style.marginTop = "0";
      showTasks();
    }
  } else {
    popUp();
  }
});

document.getElementById("rate-circle").innerHTML = 0;
showTasks = () => {
  taskList.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    const taskName = tasks[i];
    const task = document.createElement("div");
    task.id = "task";
    task.textContent = taskName;

    const taskActions = document.createElement("div");
    const deleteBtn = document.createElement("button");
    const editBtn = document.createElement("button");
    deleteBtn.className = "fa fa-times";
    deleteBtn.id = "deleteBtn";
    deleteBtn.style.color = "red";
    deleteBtn.style.background = "transparent";
    deleteBtn.style.border = "0";
    // editBtn.textContent = 'Edit';
    editBtn.className = " fa fa-pencil";
    editBtn.style.color = "black";
    editBtn.style.background = "transparent";
    editBtn.style.border = "0";
    deleteBtn.addEventListener("click", (e) => {
      tasks.splice(i, 1);
      showTasks();
    });
    clearListBtn.addEventListener("click", (e) => {
      document.getElementById("rate-circle").innerHTML = 0;
      buttons.style.marginLeft = "-3000px";
      tasks.splice(i, tasks.length);
      showTasks();
    });
    task.style.display = "flex";
    task.style.marginLeft = "0px";
    buttons.style.display = "flex";
    buttons.style.marginLeft = "0";
    taskActions.appendChild(editBtn);
    taskActions.appendChild(deleteBtn);
    task.appendChild(taskActions);
    taskList.style.marginTop = "0";
    taskList.appendChild(task);

    var rate = tasks.length;
    document.getElementById("rate-circle").innerHTML = rate;
  }
};

// schedules = [];
createScheduleBtn.addEventListener("click", (e) => {
  const scheduleList = document.createElement("div");

  scheduleList.innerHTML = taskList.textContent;
  scheduleList.style.display = "flex";
  scheduleList.style.flexDirection = "column";
  document.getElementById("schedule-section").appendChild(scheduleList);

  //   scheduleList = taskList.textContent;
  //   schedules.push(scheduleList);
  //   showSchedule();
});

// showSchedule = () => {
//   for (let i = 0; i < schedules.length; i++) {
//     const scheduleList = schedules[i];
//     const schedule = document.createElement("div");
//     schedule.textContent = scheduleList;
//     document.getElementById("schedule-section").appendChild(schedule);
//     console.log(schedules);
//   }
// };
