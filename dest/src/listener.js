import { categoryNames, list, submitButton } from "./domElements.js";
import { loadTasksFromLocalStorage } from "./storage.js";
import { addTask } from "./taskHandler.js";
import { selectedCategory, updateProgress } from "./ui.js";
export const addListener = () => {
    let category = selectedCategory;
    categoryNames === null || categoryNames === void 0 ? void 0 : categoryNames.addEventListener('change', () => {
        category = categoryNames === null || categoryNames === void 0 ? void 0 : categoryNames.value;
        if (list) {
            list.innerHTML = ''; // type inference
        }
        loadTasksFromLocalStorage(category);
        updateProgress();
    });
    submitButton === null || submitButton === void 0 ? void 0 : submitButton.addEventListener('click', (event) => {
        event.preventDefault();
        addTask(category);
    });
};
