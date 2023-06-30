// Selecting DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Counter for task numbering
let taskCounter = 1;

// Add task to the list
addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', handleKeyPress);

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const taskListItem = document.createElement('li');
    taskListItem.classList.add('list-group-item');
    taskListItem.innerHTML = `
      <span class="task-text">Task ${taskCounter}: ${taskText}</span>
      <button class="btn btn-delete">X</button>
      <button class="btn btn-move btn-move-up">&#9650;</button>
      <button class="btn btn-move btn-move-down">&#9660;</button>
    `;

    taskList.appendChild(taskListItem);
    taskCounter++;
    taskInput.value = '';
    updateTaskNumbers();
  }

  taskInput.focus();
}

function handleKeyPress(event) {
  if (event.key === 'Enter') {
    addTask();
  }
}

// Delete a task
taskList.addEventListener('click', function (event) {
    const target = event.target;
    if (target.classList.contains('btn-delete')) {
      const listItem = target.closest('li');
      listItem.remove();
      updateTaskNumbers();
    }
  });
  
  // Move task up in the list
  taskList.addEventListener('click', function (event) {
    const target = event.target;
    if (target.classList.contains('btn-move-up')) {
      const listItem = target.closest('li');
      const prevListItem = listItem.previousElementSibling;
      if (prevListItem) {
        listItem.parentNode.insertBefore(listItem, prevListItem);
        updateTaskNumbers();
      }
    }
  });
  
  // Move task down in the list
  taskList.addEventListener('click', function (event) {
    const target = event.target;
    if (target.classList.contains('btn-move-down')) {
      const listItem = target.closest('li');
      const nextListItem = listItem.nextElementSibling;
      if (nextListItem) {
        nextListItem.parentNode.insertBefore(listItem, nextListItem.nextSibling);
        updateTaskNumbers();
      }
    }
  });
7  

// Update task numbers
function updateTaskNumbers() {
  const taskItems = taskList.querySelectorAll('.list-group-item');
  taskItems.forEach((item, index) => {
    const taskText = item.querySelector('.task-text');
    taskText.textContent = `Task ${index + 1}: ${taskText.textContent.slice(taskText.textContent.indexOf(':') + 2)}`;
  });
}
