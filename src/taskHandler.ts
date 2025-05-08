import { inputBox, list } from "./domElements.ts"
import { saveTasksToLocalStorage } from "./storage.ts";
import { updateProgress } from "./ui.ts";
// import { selectedCategory } from "./ui";

export let editing=false, idx=0
type valueType=string | undefined

export const addTask=(selectedCategory: valueType, text="",completed=false)=>{
    let taskText=inputBox?.value
    if(taskText==undefined) return;
    taskText=taskText.trim()
    if(taskText==='') return 

    if(editing) 
    {
        // add updated task text, 
        console.log(list?.children[idx])
        const listItem: Element | undefined=list?.children[idx]
        if(listItem)
        {
            const span: HTMLSpanElement | null=listItem?.querySelector<HTMLSpanElement>('span')
            if(span) 
            {
                span.innerText=taskText;
                editing = false;
            }
        }
    }
    else 
    {
        addItems(selectedCategory,taskText,completed)
    }
    if(inputBox) 
    {
        inputBox.value=""
    }   
    saveTasksToLocalStorage(selectedCategory)
    updateProgress()
}

// create an list item and add update, delete event.
export const addItems=(selectedCategory: valueType,taskText: string,completed: boolean)=>{
    const listItem=document.createElement('li')
    listItem.className='task-lists'

    const input=document.createElement('input')
    input.type='checkbox'
    input.className='list-item'
    input.checked=completed
    input.addEventListener('change',(): void=>{
        completed=input.checked
        saveTasksToLocalStorage(selectedCategory)
        updateProgress()
        // input.checked=completed
    })
    // console.log('',input.checked)

    const text=document.createElement('span')
    text.innerText=taskText

    const div=document.createElement('div')

    const updateBtn=document.createElement('button')
    updateBtn.innerText='Update'
    updateBtn.id='update'
    updateBtn.addEventListener('click',(event)=>{
        event.preventDefault()
        if(inputBox) 
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
    deleteBtn.id='delete'
    deleteBtn.addEventListener('click',()=>{
        if(editing) editing=false
        listItem.remove()
        saveTasksToLocalStorage(selectedCategory)
        updateProgress()
    })

    div.append(updateBtn)
    div.append(deleteBtn)
    listItem.append(input)
    listItem.append(text)
    // listItem.append(div)
    listItem.append(updateBtn)
    listItem.append(deleteBtn)
    if(list) 
    {
        list.append(listItem)
    }
    // create li element, add update, delete event and insert
}

