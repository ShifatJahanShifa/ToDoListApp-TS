import { inputBox, list } from "./domElements.js";
import { saveTasksToLocalStorage } from "./storage.js";
import { updateProgress } from "./ui.js";
let editing = false, idx = 0;
export const addTask = (selectedCategory, completed = false) => {
    let taskText = inputBox === null || inputBox === void 0 ? void 0 : inputBox.value;
    if (taskText == undefined)
        return;
    taskText = taskText.trim();
    if (taskText === '')
        return;
    if (editing) {
        const listItem = list === null || list === void 0 ? void 0 : list.children[idx];
        if (listItem) {
            const span = listItem === null || listItem === void 0 ? void 0 : listItem.querySelector('span');
            if (span) {
                span.innerText = taskText;
                editing = false;
            }
            if (inputBox) {
                inputBox.value = "";
            }
            saveTasksToLocalStorage(selectedCategory);
            updateProgress();
        }
    }
    else {
        addItems(selectedCategory, taskText, completed);
        if (inputBox) {
            inputBox.value = "";
        }
        saveTasksToLocalStorage(selectedCategory);
        updateProgress();
    }
};
export const addItems = (selectedCategory, taskText, completed) => {
    const listItem = document.createElement('li');
    listItem.className = 'task-list';
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.className = 'list-item';
    input.checked = completed;
    input.addEventListener('change', () => {
        completed = input.checked;
        saveTasksToLocalStorage(selectedCategory);
        updateProgress();
    });
    const text = document.createElement('span');
    text.innerText = taskText;
    const updateBtn = document.createElement('button');
    updateBtn.innerText = 'Update';
    updateBtn.className = 'update';
    updateBtn.addEventListener('click', () => {
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
    deleteBtn.className = 'delete';
    deleteBtn.addEventListener('click', () => {
        let idx2 = idx;
        if (list) {
            idx2 = Array.from(list.children).indexOf(listItem);
        }
        if (editing && (idx == idx2))
            editing = false;
        listItem.remove();
        saveTasksToLocalStorage(selectedCategory);
        updateProgress();
    });
    listItem.appendChild(input);
    listItem.appendChild(text);
    listItem.appendChild(updateBtn);
    listItem.appendChild(deleteBtn);
    if (list) {
        list.appendChild(listItem);
    }
};
