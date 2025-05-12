import { list, progressNumber } from "./domElements.ts"
import { saveTasksToLocalStorage } from "./storage.ts"

export let selectedCategory: string='📚 Study'

export const updateProgress=(): void=>{
    const totalTask: number | undefined=list?.children.length
    const completedTask: number | undefined=list?.querySelectorAll<HTMLInputElement>('.list-item:checked').length
   
    if(progressNumber)
    {
        console.log('i got call',totalTask, completedTask);
        
        progressNumber.textContent=`Completed Task: ${completedTask}/${totalTask}`
    }
    // console.log('w',completedTask, totalTask)
}

