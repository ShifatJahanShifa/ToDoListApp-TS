let categoryName: HTMLSelectElement | null
let inputBox: HTMLInputElement | null
let submitButton: HTMLButtonElement | null
let list: HTMLUListElement | null
let form: HTMLFormElement | null
let progressNumber: HTMLParagraphElement | null

export const initializeDomElements=(): void =>{
    categoryName=document.getElementById('category') as HTMLSelectElement | null
    progressNumber=document.getElementById('progress-number') as HTMLParagraphElement | null
    form=document.getElementById('form') as HTMLFormElement | null
    inputBox=document.getElementById('input-box') as HTMLInputElement | null
    submitButton=document.getElementById('submit-button') as HTMLButtonElement | null
    list=document.getElementById('list-items') as HTMLUListElement | null
}

export { categoryName, progressNumber, form, inputBox, submitButton, list }