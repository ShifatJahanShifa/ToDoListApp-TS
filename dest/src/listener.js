import { categoryName, list, submitButton } from "./domElements.js";
import { loadTasksFromLocalStorage } from "./storage.js";
import { addTask } from "./taskHandler.js";
import { selectedCategory, updateProgress } from "./ui.js";
export const addListener = () => {
    let category = selectedCategory;
    categoryName === null || categoryName === void 0 ? void 0 : categoryName.addEventListener('change', () => {
        category = categoryName === null || categoryName === void 0 ? void 0 : categoryName.value;
        console.log(category);
        // empty the ul. render the items from storage. 
        if (list) {
            list.innerHTML = ''; // infer the string type
        }
        loadTasksFromLocalStorage(category);
        updateProgress();
    });
    submitButton === null || submitButton === void 0 ? void 0 : submitButton.addEventListener('click', (event) => {
        event.preventDefault();
        addTask(category);
    });
};
