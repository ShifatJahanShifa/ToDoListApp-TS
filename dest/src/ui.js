import { list, progressNumber } from "./domElements.js";
export let selectedCategory = '📚 Study';
export const updateProgress = () => {
    const totalTask = list === null || list === void 0 ? void 0 : list.children.length;
    const completedTask = list === null || list === void 0 ? void 0 : list.querySelectorAll('.list-item:checked').length;
    if (progressNumber) {
        progressNumber.textContent = `Completed Task: ${completedTask}/${totalTask}`;
    }
};
