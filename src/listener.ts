import { categoryNames, list, submitButton } from "./domElements.ts";
import { loadTasksFromLocalStorage } from "./storage.ts";
import { addTask } from "./taskHandler.ts";
import { selectedCategory, updateProgress } from "./ui.ts";

export type categoryType=string | undefined

export const addListener=(): void =>{
    let category: categoryType =selectedCategory;

    categoryNames?.addEventListener('change',(): void=>{
        category=categoryNames?.value;
       
        if(list) 
        {
            list.innerHTML=''  // type inference
        }
        loadTasksFromLocalStorage(category)
        updateProgress()
    })


    submitButton?.addEventListener('click', (event): void => 
    {
        event.preventDefault()
        addTask(category)
    })
}