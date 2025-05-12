import { list, progressNumber } from "./domElements.ts"

export let selectedCategory: string='📚 Study'

export const updateProgress=(): void=>{
    const totalTask: number | undefined=list?.children.length
    const completedTask: number | undefined=list?.querySelectorAll<HTMLInputElement>('.list-item:checked').length
   
    if(progressNumber)
    {
        progressNumber.textContent=`Completed Task: ${completedTask}/${totalTask}`
    }
}

