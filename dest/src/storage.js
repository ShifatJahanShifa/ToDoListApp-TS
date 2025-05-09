import { list } from "./domElements.js";
import { addItems } from "./taskHandler.js";
export const saveTasksToLocalStorage = (selectedCategory) => {
    const lists = list === null || list === void 0 ? void 0 : list.querySelectorAll('li');
    let tasks = [];
    if (lists) {
        for (let i = 0; i < lists.length; i++) {
            let tempText;
            let spanElem = lists[i].querySelector('span');
            let tempCompletion;
            let inputElem = lists[i].querySelector('.list-item');
            if (spanElem) {
                tempText = spanElem.textContent;
                tempCompletion = inputElem === null || inputElem === void 0 ? void 0 : inputElem.checked;
                if (tempText !== null && tempCompletion !== undefined) {
                    let temp = {
                        text: tempText,
                        completed: tempCompletion
                    };
                    tasks.push(temp);
                }
            }
        }
    }
    if (typeof selectedCategory === 'string') {
        localStorage.setItem(selectedCategory, JSON.stringify(tasks));
    }
};
export const loadTasksFromLocalStorage = (selectedCategory) => {
    if (selectedCategory) // type guard
     {
        const savedTasks = JSON.parse(localStorage.getItem(selectedCategory) || '[]');
        for (let i = 0; i < savedTasks.length; i++) {
            addItems(selectedCategory, savedTasks[i].text, savedTasks[i].completed);
        }
    }
};
