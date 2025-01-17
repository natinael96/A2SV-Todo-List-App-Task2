"use strict";
let taskID = 0;
function addTask() {
    const inputTask = document.getElementById('inputTask');
    const task = inputTask.value.trim();
    if (!task) {
        alert('Please enter a task');
        return;
    }
    taskID++;
    const taskList = document.getElementById('task-list');
    const eachTask = document.createElement('li');
    eachTask.id = `task-${taskID}`;
    eachTask.innerHTML = `
        <input type="checkbox" class="check" onclick="toggleComplete(${taskID})">
        <span id="task">${task}</span>
        <button class="edit" onclick="editTask(${taskID})">Edit</button>
        <button class="delete" onclick="deleteTask(${taskID})">Delete</button>`;
    taskList.appendChild(eachTask);
    inputTask.value = '';
}
function toggleComplete(id) {
    const task = document.getElementById(`task-${id}`);
    if (task) {
        const taskText = task.querySelector('span');
        if (taskText) {
            taskText.classList.toggle('completed');
        }
    }
}
function editTask(id) {
    const task = document.getElementById(`task-${id}`);
    if (task) {
        const taskText = task.querySelector('span');
        if (taskText) {
            const newText = prompt('Edit Task', taskText.innerText);
            if (newText) {
                taskText.innerText = newText;
            }
        }
    }
}
function deleteTask(id) {
    const task = document.getElementById(`task-${id}`);
    if (task) {
        task.remove();
    }
}
