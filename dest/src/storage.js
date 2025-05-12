import { list } from "./domElements.js";
import { addItems } from "./taskHandler.js";
export const saveTasksToLocalStorage = (selectedCategory) => {
    console.log('saved');
    const lists = list === null || list === void 0 ? void 0 : list.querySelectorAll('li');
    let tasks = [];
    if (lists) {
        console.log('saved');
        for (let i = 0; i < lists.length; i++) {
            let tempText;
            let spanElem = lists[i].querySelector('span');
            let tempCompletion;
            let inputElem = lists[i].querySelector('.list-item');
            if (spanElem) {
                console.log('saved');
                tempText = spanElem.textContent;
                tempCompletion = inputElem === null || inputElem === void 0 ? void 0 : inputElem.checked;
                if (tempText !== null && tempCompletion !== undefined) {
                    console.log('do i enter');
                    let temp = {
                        text: tempText,
                        completed: tempCompletion
                    };
                    tasks.push(temp);
                }
            }
        }
    }
    for (let i = 0; i < tasks.length; i++) {
        console.log(tasks[i].text, tasks[i].completed);
    }
    if (typeof selectedCategory === 'string') {
        console.log('here saved');
        localStorage.setItem(selectedCategory, JSON.stringify(tasks));
        console.log('storage', localStorage.getItem(selectedCategory));
    }
};
export const loadTasksFromLocalStorage = (selectedCategory) => {
    if (selectedCategory) // type guard
     {
        selectedCategory;
        const savedTasks = JSON.parse(localStorage.getItem(selectedCategory) || '[]');
        for (let i = 0; i < savedTasks.length; i++) {
            // update UI
            addItems(selectedCategory, savedTasks[i].text, savedTasks[i].completed);
        }
    }
    // console.log('okkk', savedTasks.length)
    // console.log('task',savedTasks)
};
