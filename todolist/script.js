const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const doneList = document.getElementById("doneList");

// Load tasks on page load
document.addEventListener("DOMContentLoaded", loadTasks);

addBtn.addEventListener("click", addTask);

function getTasks() {
    return JSON.parse(localStorage.getItem("tasks")) || [];
}

function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
    const text = taskInput.value.trim();
    if (text === "") return alert("Enter a task!");

    const tasks = getTasks();
    tasks.push({ text, done: false });
    saveTasks(tasks);

    taskInput.value = "";
    loadTasks();
}

function loadTasks() {
    taskList.innerHTML = "";
    doneList.innerHTML = "";

    const tasks = getTasks();

    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
            <span class="${task.done ? 'completed' : ''}">
                ${task.text}
            </span>
            <div>
                ${!task.done ? `<button class="done-btn">Done</button>` : ""}
                <button class="delete">X</button>
            </div>
        `;

        if (task.done) {
            doneList.appendChild(li);
        } else {
            taskList.appendChild(li);
        }

        // Done button
        const doneBtn = li.querySelector(".done-btn");
        if (doneBtn) {
            doneBtn.addEventListener("click", () => markDone(index));
        }

        // Delete button
        li.querySelector(".delete").addEventListener("click", () => {
            deleteTask(index);
        });
    });
}

function markDone(index) {
    const tasks = getTasks();
    tasks[index].done = true;
    saveTasks(tasks);
    loadTasks();
}

function deleteTask(index) {
    const tasks = getTasks();
    tasks.splice(index, 1);
    saveTasks(tasks);
    loadTasks();
}

