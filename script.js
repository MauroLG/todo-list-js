const inputTask = document.querySelector('.input-task');
const addTaskBtn = document.querySelector('.add-task');
const toDoingBtn = document.querySelector('.to-doing');
const toDoneBtn = document.querySelector('.to-done');
const tasksTodo = document.querySelector('.tasks__todo');
const tasksDoing = document.querySelector('.tasks__doing');
const emptyErr = document.querySelector('.emptyErr');

let idTask = 0;

const addTask = () => {
  if (!inputTask.value.trim().length) {
    return (emptyErr.style.display = 'block');
  } else {
    emptyErr.style.display = 'none';
    let valueInputTask = inputTask.value;
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(valueInputTask));
    li.id = `task-${idTask}`;
    li.className = 'task-item';

    tasksTodo.appendChild(li);
    idTask++;
    inputTask.value = '';
  }
};

const selectTask = (event) => {
  // console.log(event.target);
  event.target.classList.toggle('selected-task');
};

const moveToDoing = () => {
  let tasksList = document.querySelectorAll('.selected-task');
  console.log(tasksList[0]);
  while (tasksList.length > 0) {
    tasksTodo.removeChild(tasksList[0]);
    tasksDoing.appendChild(tasksList[0]);
    tasksList[0].classList.remove('selected-task');
    tasksList = document.querySelectorAll('.selected-task');
  }
};

addTaskBtn.addEventListener('click', addTask);
tasksTodo.addEventListener('click', selectTask);
toDoingBtn.addEventListener('click', moveToDoing);
