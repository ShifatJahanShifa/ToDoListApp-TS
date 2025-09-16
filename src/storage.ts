import { list } from "./domElements.ts"
import { addItems } from "./taskHandler.ts"
import { categoryType } from "./listener.ts"


type storage={
    text: string
    completed: boolean
}

export const saveTasksToLocalStorage=(selectedCategory: categoryType): void=>{
    const lists=list?.querySelectorAll<HTMLLIElement>('li')
    let tasks: storage[]=[]

    if(lists)
    {
        for (let i=0;i< lists.length; i++) 
        {
            let tempText: string | null;
            let spanElem: HTMLSpanElement | null=lists[i].querySelector<HTMLSpanElement>('span')
            let tempCompletion: boolean | undefined
            let inputElem: HTMLInputElement | null=lists[i].querySelector<HTMLInputElement>('.list-item')

            if(spanElem) 
            {
                tempText=spanElem.textContent
                tempCompletion=inputElem?.checked
                if(tempText!==null && tempCompletion!==undefined) 
                {
                    let temp: storage={
                        text: tempText,
                        completed: tempCompletion
                    }
                    tasks.push(temp)
                }
            }
        }
    }

    if(typeof selectedCategory==='string')
    {
        localStorage.setItem(selectedCategory,JSON.stringify(tasks))
    }
}


export const loadTasksFromLocalStorage=(selectedCategory: categoryType): void=>{
    if(selectedCategory)  // type guard
    {
        const savedTasks: storage[]=JSON.parse(localStorage.getItem(selectedCategory) || '[]')

        for(let i=0;i<savedTasks.length;i++) 
        {
            addItems(selectedCategory,savedTasks[i].text,savedTasks[i].completed)
        }
    }
}