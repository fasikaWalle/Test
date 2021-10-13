let btntask = document.getElementById("task");
let wrapper = document.getElementById("wrapper");
let taskInput = document.getElementById("taskInput");
let chooseTask = document.getElementById("choose");
const addTask = (e) => {
  e.preventDefault();
  if (taskInput && taskInput.value.length !== 0) {
    let l1 = document.createElement("li");
    let l2 = document.createElement("span");
    l1.textContent = taskInput.value;
    l2.textContent = chooseTask.value;
    wrapper.appendChild(l1);
    wrapper.appendChild(l2);
  }
};

btntask.addEventListener("submit", addTask);
