import { initializeDomElements } from "./src/domElements.ts"
import { addListener } from "./src/listener.ts";
import { loadTasksFromLocalStorage } from "./src/storage.ts";
import { selectedCategory, updateProgress } from "./src/ui.ts";


document.addEventListener('DOMContentLoaded',(): void =>{
    initializeDomElements()
    addListener()
    loadTasksFromLocalStorage(selectedCategory) 
    console.log('helllo shifa');
    updateProgress()
})