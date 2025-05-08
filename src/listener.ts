import { categoryName, form, list, submitButton } from "./domElements.ts";
import { loadTasksFromLocalStorage } from "./storage.ts";
import { addTask } from "./taskHandler.ts";
import { selectedCategory, updateProgress } from "./ui.ts";

type valueType=string | undefined

export const addListener=(): void =>{
    let category: valueType =selectedCategory;

    categoryName?.addEventListener('change',()=>{
        category=categoryName?.value;
       
        console.log(category)
        // empty the ul. render the items from storage. 
        if(list) 
        {
            list.innerHTML=''  // infer the string type
        }
        loadTasksFromLocalStorage(category)
        updateProgress()
    })


    submitButton?.addEventListener('click', (event) => 
    {
        event.preventDefault()
        addTask(category)
    })
}