import { list } from "./domElements.ts"
import { addItems, addTask } from "./taskHandler.ts"

type valueType=string | undefined
type storage={
    text: string
    completed: boolean
}

export const saveTasksToLocalStorage=(selectedCategory: valueType): void=>{
    console.log('saved')
    const lists=list?.querySelectorAll<HTMLLIElement>('li')
    let tasks: storage[]=[]
    if(lists)
    {
        console.log('saved')
        for (let i=0;i< lists.length; i++) 
        {
            let tempText: string | null;
            let spanElem: HTMLSpanElement | null=lists[i].querySelector<HTMLSpanElement>('span')
            let tempCompletion: boolean | undefined
            let inputElem: HTMLInputElement | null=lists[i].querySelector<HTMLInputElement>('.list-item')

            if(spanElem) 
            {
                console.log('saved')
                tempText=spanElem.textContent
                tempCompletion=inputElem?.checked
                if(tempText!==null && tempCompletion!==undefined) 
                {
                    console.log('do i enter');
                    
                    let temp: storage={
                        text: tempText,
                        completed: tempCompletion
                    }
                    tasks.push(temp)
                }
            }
        }
    }

    for(let i=0;i<tasks.length;i++) 
    {
        console.log(tasks[i].text, tasks[i].completed)
    }
    if(typeof selectedCategory==='string')
    {
        console.log('here saved')
        localStorage.setItem(selectedCategory,JSON.stringify(tasks))
        console.log('storage',localStorage.getItem(selectedCategory))
    }
}


export const loadTasksFromLocalStorage=(selectedCategory: valueType): void=>{
    if(selectedCategory)  // type guard
    {
        selectedCategory
        const savedTasks: storage[]=JSON.parse(localStorage.getItem(selectedCategory) || '[]')

        for(let i=0;i<savedTasks.length;i++) 
        {
            // update UI
            addItems(selectedCategory,savedTasks[i].text,savedTasks[i].completed)
        }
    }
    // console.log('okkk', savedTasks.length)
    // console.log('task',savedTasks)
}