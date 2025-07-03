let listitem = JSON.parse(localStorage.getItem('todoList')) || [];
window.onload = () => {
  displayTasks(); // 2. Display the stored tasks
};

let addtodo = () => {
  let taskinput = document.querySelector('#taskInput');
  let task = taskinput.value;
  let date = document.querySelector('#datetime');
  let taskdate = date.value;
  listitem.push({
    task: task,
    date: taskdate,
  });
  localStorage.setItem('todoList', JSON.stringify(listitem));

  taskinput.value = '';
  date.value = '';

  displayTasks();
};
let displayTasks = () => {
  let tasklist = document.querySelector('.todocontainer');
  tasklist.innerHTML = '';

  for (let i = 0; i < listitem.length; i++) {
    tasklist.innerHTML += `
      <div class="allitem">
        <p>${listitem[i].task}</p>
        <p>${listitem[i].date}</p>
        <button id="delete" onclick="deleteTask(${i})">Delete</button>
      </div>
    `;
  }
};
let deleteTask = (index) => {
  listitem.splice(index, 1);
  localStorage.setItem('todoList', JSON.stringify(listitem));
  displayTasks();
};
