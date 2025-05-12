
# ToDoList App in TypeScript 📝

This project is the conversion of the base javascript project into typescript project. The link for the base javascript project: https://github.com/ShifatJahanShifa/To-Do-List-App.  

## Project Structure

```
/To-Do-List-App
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

## Key Changes

All the core functionalities of this project are same as base javascript project. But in this project, I have followed typescript's type rules as much as I can. 


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

In this file, I have defined a type for variable that will hold the categoryName.  

```ts
export type categoryType=string | undefined
```  

Also, I have used optional chaining operator to handle the case if the value is null. For example: 

```ts
submitButton?.addEventListener('click', (event): void => 
    {
        event.preventDefault()
        addTask(category)
    })
``` 

`storage.ts` 

In this file, I have defined a type for stored data. 

```ts
type storage={
    text: string
    completed: boolean
}
``` 

Also, I have specified the type in the `querySelector` function. For example: 

```ts
 let spanElem: HTMLSpanElement | null=lists[i].querySelector<HTMLSpanElement>('span')
```

`taskhandler.ts` 

In this file, I applied **optional chaining** operator where necessary.
```ts
 let taskText: categoryType=inputBox?.value
```

`ui.ts`

Also in this file, I have used optional chaining operator and specified HTML element while invoking querySelectorAll function. 
```ts
 const completedTask: number | undefined=list?.querySelectorAll<HTMLInputElement>('.list-item:checked').length
```


## Technology

```
HTML, CSS, Javascript
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


