import { initializeDomElements } from "./src/domElements.js";
import { addListener } from "./src/listener.js";
import { loadTasksFromLocalStorage } from "./src/storage.js";
import { selectedCategory, updateProgress } from "./src/ui.js";
document.addEventListener('DOMContentLoaded', () => {
    initializeDomElements();
    addListener();
    loadTasksFromLocalStorage(selectedCategory);
    console.log('helllo shifa');
    updateProgress();
});
