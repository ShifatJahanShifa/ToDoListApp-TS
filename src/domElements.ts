let categoryNames: HTMLSelectElement | null
let inputBox: HTMLInputElement | null
let submitButton: HTMLButtonElement | null
let list: HTMLUListElement | null
let progressNumber: HTMLParagraphElement | null

export const initializeDomElements=(): void =>{
    categoryNames=document.getElementById('category') as HTMLSelectElement | null
    progressNumber=document.getElementById('progress-number') as HTMLParagraphElement | null
    inputBox=document.getElementById('input-box') as HTMLInputElement | null
    submitButton=document.getElementById('submit-button') as HTMLButtonElement | null
    list=document.getElementById('list') as HTMLUListElement | null
}

export { categoryNames, progressNumber, inputBox, submitButton, list }