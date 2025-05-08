import { inputBox, list } from "./domElements.js";
import { saveTasksToLocalStorage } from "./storage.js";
import { updateProgress } from "./ui.js";
// import { selectedCategory } from "./ui";
export let editing = false, idx = 0;
export const addTask = (selectedCategory, text = "", completed = false) => {
    let taskText = inputBox === null || inputBox === void 0 ? void 0 : inputBox.value;
    if (taskText == undefined)
        return;
    taskText = taskText.trim();
    if (taskText === '')
        return;
    if (editing) {
        // add updated task text, 
        console.log(list === null || list === void 0 ? void 0 : list.children[idx]);
        const listItem = list === null || list === void 0 ? void 0 : list.children[idx];
        if (listItem) {
            const span = listItem === null || listItem === void 0 ? void 0 : listItem.querySelector('span');
            if (span) {
                span.innerText = taskText;
                editing = false;
            }
        }
    }
    else {
        addItems(selectedCategory, taskText, completed);
    }
    if (inputBox) {
        inputBox.value = "";
    }
    saveTasksToLocalStorage(selectedCategory);
    updateProgress();
};
// create an list item and add update, delete event.
export const addItems = (selectedCategory, taskText, completed) => {
    const listItem = document.createElement('li');
    listItem.className = 'task-lists';
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.className = 'list-item';
    input.checked = completed;
    input.addEventListener('change', () => {
        completed = input.checked;
        saveTasksToLocalStorage(selectedCategory);
        updateProgress();
        // input.checked=completed
    });
    // console.log('',input.checked)
    const text = document.createElement('span');
    text.innerText = taskText;
    const div = document.createElement('div');
    const updateBtn = document.createElement('button');
    updateBtn.innerText = 'Update';
    updateBtn.id = 'update';
    updateBtn.addEventListener('click', (event) => {
        event.preventDefault();
        if (inputBox && !input.checked) {
            inputBox.value = text.innerText;
            editing = true;
            if (list) {
                idx = Array.from(list.children).indexOf(listItem);
            }
        }
    });
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.id = 'delete';
    deleteBtn.addEventListener('click', () => {
        if (editing)
            editing = false;
        listItem.remove();
        saveTasksToLocalStorage(selectedCategory);
        updateProgress();
    });
    div.append(updateBtn);
    div.append(deleteBtn);
    listItem.append(input);
    listItem.append(text);
    // listItem.append(div)
    listItem.append(updateBtn);
    listItem.append(deleteBtn);
    if (list) {
        list.append(listItem);
    }
    // create li element, add update, delete event and insert
};
