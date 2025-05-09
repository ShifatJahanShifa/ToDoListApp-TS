
# ToDoList App in TypeScript 📝

This project is the conversion of the base javascript project into typescript project. The link for the base javascript project: https://github.com/ShifatJahanShifa/To-Do-List-App.  

## Project Structure

```
/ToDoListApp-TS
  |-- /dest               # Compiled JavaScript files (output folder)
  |     |-- src/
  |          |-- domElements.js
  |          |-- listener.js
  |          |-- storage.js
  |          |-- taskHandler.js
  |          |-- ui.js
  |          
  |     |-- script.js     # main js file
  |-- /src                # Source folder for TypeScript files
  |     |-- domElements.ts
  |     |-- listener.ts
  |     |-- storage.ts
  |     |-- taskHandler.ts
  |     |-- ui.ts
  |-- gitignore
  |-- index.html          # Main HTML file
  |-- package-lock.json
  |-- package.json
  |-- README.md
  |-- script.ts           # Entry point for the app
  |-- style.css           # CSS file
  |-- tsconfig.json       # TypeScript configuration file
```


## Typescipt Concepts
Typescript concepts I used in my project:
- Type assertion
- Optional chaining operator
- Type guards
- Object type
- Union type
- Specific type in place of generic type

## Types in Modules

All the core functionalities of this project are the same as base javascript project. But in this project, I have followed typescript's type rules as much as I can. 


`domElements.ts` 

In this file, I have added type to the variables that hold dom elements. The types are set based on the dom elements. I need to use the union type of specific HTML element type with null type. Because the value can also be `null` in case of the absence of the dom elements. Also The `getElementById` function's return type is `HTMLElement | null`. But here, I've used `type assertion` to tell the compiler the specific type of the return value. Mainly I am specifying the HTML element type.

```ts
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
```


`listener.ts` 

In this file, I have defined a type for a variable that will hold the categoryName.  

```ts
export type categoryType=string | undefined
```  

Also, I have used optional chaining operator to handle the case if the value can be null. For example: 

```ts
submitButton?.addEventListener('click', (event): void => 
    {
        event.preventDefault()
        addTask(category)
    })
``` 

`storage.ts` 

In this file, I have defined a type for the stored data. 

```ts
type storage={
    text: string
    completed: boolean
}
``` 

Also, I have specified the type in place of generic type when invoking the `querySelector` function. For example: 

```ts
 let spanElem: HTMLSpanElement | null=lists[i].querySelector<HTMLSpanElement>('span')
```

`taskhandler.ts` 

In this file, I've applied **optional chaining** operator where necessary.
```ts
 let taskText: categoryType=inputBox?.value
```

`ui.ts`

Also in this file, I have used optional chaining operator and specified HTML element while invoking querySelectorAll function. 
```ts
 const completedTask: number | undefined=list?.querySelectorAll<HTMLInputElement>('.list-item:checked').length
```

I have used type guard in this file. For example:
```ts
if(progressNumber)   // narrowing down the type. progressNumber can be an HTML element or null
{
    progressNumber.textContent=`Completed Task: ${completedTask}/${totalTask}`
}
```


## Technology

```
HTML: For structuring the website
CSS: For styling the website
Javascript: For adding logic the website
```


## Installation

clone the project:  

```bash
git clone https://github.com/ShifatJahanShifa/ToDoListApp-TS.git
```

## Run Locally

```
Open the HTML file in any of your favorite browsers (like Chrome, firefox, Microsoft Edge etc)
```


## Deployment

Github Page Link: [ToDoList App](https://shifatjahanshifa.github.io/ToDoListApp-TS/)


## Authors

- [@ShifatJahanShifa](https://www.github.com/ShifatJahanShifa)


