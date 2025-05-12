import { inputBox, list } from "./domElements.ts"
import { saveTasksToLocalStorage } from "./storage.ts";
import { updateProgress } from "./ui.ts";
import { categoryType } from "./listener.ts";

let editing: boolean=false, idx: number=0;

export const addTask=(selectedCategory: categoryType,completed=false)=>{
    let taskText: categoryType=inputBox?.value
    if(taskText==undefined) return;
    taskText=taskText.trim()
    if(taskText==='') return 

    if(editing) 
    {
        const listItem: Element | undefined=list?.children[idx]
        if(listItem)
        {
            const span: HTMLSpanElement | null=listItem?.querySelector<HTMLSpanElement>('span')
            if(span) 
            {
                span.innerText=taskText;
                editing = false;
            }
            if(inputBox) 
            {
                inputBox.value=""
            }   
            saveTasksToLocalStorage(selectedCategory)
            updateProgress()
        }
    }
    else 
    {
        addItems(selectedCategory,taskText,completed)
        if(inputBox) 
        {
            inputBox.value=""
        }   
        saveTasksToLocalStorage(selectedCategory)
        updateProgress()
    }
}


export const addItems=(selectedCategory: categoryType,taskText: string,completed: boolean)=>{
    const listItem=document.createElement('li')
    listItem.className='task-list'

    const input=document.createElement('input')
    input.type='checkbox'
    input.className='list-item'
    input.checked=completed
    input.addEventListener('change',(): void=>{
        completed=input.checked
        saveTasksToLocalStorage(selectedCategory)
        updateProgress()
    })
   
    const text=document.createElement('span')
    text.innerText=taskText

    const updateBtn=document.createElement('button')
    updateBtn.innerText='Update'
    updateBtn.className='update'
    updateBtn.addEventListener('click',()=>{
        if(inputBox && !input.checked) 
        {
            inputBox.value=text.innerText
            editing=true
            if(list)
            {
                idx=Array.from(list.children).indexOf(listItem)
            }
        }
    })

    const deleteBtn=document.createElement('button')
    deleteBtn.innerText='Delete'
    deleteBtn.className='delete'
    deleteBtn.addEventListener('click',()=>{
        let idx2: number=idx;
        if(list)
        {
            idx2=Array.from(list.children).indexOf(listItem)
        }
        if(editing &&(idx==idx2)) editing=false
        listItem.remove()
        saveTasksToLocalStorage(selectedCategory)
        updateProgress()
    })

    
    listItem.appendChild(input)
    listItem.appendChild(text)
    listItem.appendChild(updateBtn)
    listItem.appendChild(deleteBtn)

    if(list) 
    {
        list.appendChild(listItem)
    }
}

