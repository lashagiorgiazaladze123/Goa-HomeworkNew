
document.getElementById('addTaskBtn').addEventListener('click', addTask);
document.getElementById('clearAllBtn').addEventListener('click', clearAllTasks);




function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText === '') return; // Prevent empty tasks from being added
    
    const taskList = document.getElementById('taskList');
    const newTask = document.createElement('li');
    newTask.textContent = taskText;
  

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => deleteTask(newTask));
    

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', () => editTask(newTask, taskText));
  
    newTask.appendChild(deleteBtn);
    newTask.appendChild(editBtn);
    
    taskList.appendChild(newTask);
    taskInput.value = ''; // Clear the input after adding the task
  }




function deleteTask(task) {
    task.remove(); // Remove the task element from the list
  }
  


  function clearAllTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; // Clear all tasks from the list
  }
  