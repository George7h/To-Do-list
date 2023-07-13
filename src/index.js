import './style.css';

const tasks = [
  {
    description: 'Do Project 1',
    completed: false,
    index: 0,
  },
  {
    description: 'Setup Linters',
    completed: true,
    index: 1,
  },
  {
    description: 'Create files and setup webpacks',
    completed: false,
    index: 2,
  },
];

// Sort tasks
const sortedTasks = tasks.sort((a, b) => a.index - b.index);

function populateList() {
  const taskList = document.querySelector('#task-list');
  taskList.innerHTML = '';

  sortedTasks.forEach((task) => {
    const li = document.createElement('li');
    li.innerHTML = `
    <div class="containitem">
    <div class="item">
    <input type="checkbox" ${task.completed}> ${task.description} </div>
    <i class="fa-solid fa-ellipsis-vertical"></i></div>`;
    taskList.appendChild(li);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  populateList();
});