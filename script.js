const inputTask = document.querySelector('.input-task');
const addTaskBtn = document.querySelector('.add-task');
const tasksList = document.querySelector('.tasks__list');
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
    li.setAttribute('id', `task-${idTask}`);
    idTask++;
    tasksList.appendChild(li);
    inputTask.value = '';
  }
};

addTaskBtn.addEventListener('click', addTask);
