const addTaskBtn = document.getElementById('addTaskBtn');
const taskInputWrapper = document.getElementById('taskInputWrapper');
const taskInput = document.getElementById('taskInput');
const saveTaskBtn = document.getElementById('saveTaskBtn');
const taskList = document.getElementById('taskList');
const taskCount = document.getElementById('taskCount');
let selectedCount = 0;

addTaskBtn.addEventListener('click', function() {
    taskInputWrapper.style.display = 'block';
});

saveTaskBtn.addEventListener('click', function() {
    const task = taskInput.value.trim();
    if (task !== '') {
        saveTask(task);
        displayTasks();
        taskInput.value = '';
        taskInputWrapper.style.display = 'none';
    }
});

function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push({ task: task, completed: false });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function displayTasks() {
    taskList.innerHTML = '';
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    selectedCount = 0;
    tasks.forEach((task, index) => {
        const taskItem = document.createElement('div');
        taskItem.innerHTML = `
            <input type="checkbox" class="check" id="task${index}" ${task.completed ? 'checked' : ''}>
            <label for="task${index}">${task.task}</label>
        `;
        taskItem.querySelector(`#task${index}`).addEventListener('change', function() {
            task.completed = !task.completed;
            localStorage.setItem('tasks', JSON.stringify(tasks));
            selectedCount = tasks.filter(task => task.completed).length;
            updateTaskCount(tasks.length, selectedCount);
        });
        taskList.appendChild(taskItem);
    });
    updateTaskCount(tasks.length, selectedCount);
}

function updateTaskCount(totalCount, selectedCount) {
    taskCount.innerHTML = `${selectedCount} / ${totalCount}  `;
}
displayTasks();



const currentDate = new Date();
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const dayOfWeek = weekdays[currentDate.getDay()];
document.querySelector('.dayOfWeek').textContent = dayOfWeek;
document.querySelector('.dayOfWeek1').textContent = dayOfWeek;


const addTaskBtn2 = document.getElementById('addTaskBtn2');
const taskInputWrapper2 = document.getElementById('taskInputWrapper2');
const taskInput2 = document.getElementById('taskInput2');
const saveTaskBtn2 = document.getElementById('saveTaskBtn2');
const taskList2 = document.getElementById('taskList2');
const taskCount2 = document.getElementById('taskCount2');
let selectedCount2 = 0;

addTaskBtn2.addEventListener('click', function() {
    taskInputWrapper2.style.display = 'block';
});

saveTaskBtn2.addEventListener('click', function() {
    const task2 = taskInput2.value.trim();
    if (task2 !== '') {
        saveTask2(task2);
        displayTasks2();
        taskInput2.value = '';
        taskInputWrapper2.style.display = 'none';
    }
});
function saveTask2(task2) {
    let tasks2 = JSON.parse(localStorage.getItem('tasks2')) || [];
    tasks2.push({ task2: task2, completed: false });
    localStorage.setItem('tasks2', JSON.stringify(tasks2));
}


function displayTasks2() {
    taskList2.innerHTML = '';
    const tasks2 = JSON.parse(localStorage.getItem('tasks2')) || [];
    selectedCount2 = tasks2.filter(task2 => task2.completed).length; 
    tasks2.forEach((task2, index) => {
        const taskItem2 = document.createElement('div');
        taskItem2.innerHTML = `
            <input type="checkbox" class="check" id="taska${index}" ${task2.completed ? 'checked' : ''}>
            <label for="taska${index}">${task2.task2}</label>
        `;
        taskItem2.querySelector(`#taska${index}`).addEventListener('change', function() {
            task2.completed = !task2.completed;
            localStorage.setItem('tasks2', JSON.stringify(tasks2));
            selectedCount2 = tasks2.filter(task2 => task2.completed).length; 
            updateTaskCount2(tasks2.length, selectedCount2); 
        });
        taskList2.appendChild(taskItem2);
    });
    updateTaskCount2(tasks2.length, selectedCount2); 
}

function updateTaskCount2(totalCount2, selectedCount2) {
    taskCount2.innerHTML = `${selectedCount2} / ${totalCount2}  `;
}

displayTasks2();
