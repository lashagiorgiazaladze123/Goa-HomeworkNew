document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn")
    const clearAllBtn = document.getElementById("clearAllBtn");
    const taskList = document.getElementById("taskList")

    const loadTasks = () => {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        taskList.innerHTML = ""; // Clear existing list
        tasks.forEach((task, index) => {
            const li = document.createElement("li");
            li.textContent = task;
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.style.marginLeft = "10px";
            deleteBtn.addEventListener("click", () => deleteTask(index));
            li.appendChild(deleteBtn);
            taskList.appendChild(li);
        })
    }
    const addTask = () => {
        const task = taskInput.value.trim();
        if (task) {
            const tasks = JSON.parse(localStorage.getItem("tasks")) || []
            tasks.push(task);
            localStorage.setItem("tasks", JSON.stringify(tasks))
            taskInput.value = ""
            loadTasks()
        }
    }
    const deleteTask = (index) => {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || []
        tasks.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        loadTasks()
    }
    const clearAllTasks = () => {
        localStorage.removeItem("tasks")
        loadTasks()
    }
    addTaskBtn.addEventListener("click", addTask);
    clearAllBtn.addEventListener("click", clearAllTasks);
    loadTasks();
});
