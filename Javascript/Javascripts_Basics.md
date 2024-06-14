# navin-javascript-notes
Using the repo for revision 

Heading: `#`, `##`, `###`
Bold: **bold**
italic: *italic*
code block: ``code``
list: `-list` or `1. item`
links: `[title](https://js.com)`


## Introduction
JS is a versatile, object-oriented programming lang used for web developement. 

## variables
- `var`: Function-scoped variable declartion.
- `let`: block-scoped variable declaration.
- `const` : block-scoped variable declaration. It can't be `re-assinged` ever
**Speaking Script**: *Using `var`, `let`, `const` effectively can prevent scope-related bugs.

- Code Instance: 
```
function exampleVar(){
    if(true){
        var x = 10;
    }
    console.log(x) *//10, coz var is function-scoped*
}
function exampleConst(){
    if(true){
        let y = 20;
        const z = 30;
    }
    console.log(y) *//Reference error, let is blocked scope*
    console.log(z) *//Reference error, const is a blocked scope*
}
```

## Example 
```javascript
var name = 'navin';
let age = 23;
const isToggle = true;
```
## What is closure?
- **Its a `function` that retains access to its lexical scope even when the function is executed outside that scope.**
```
function createCouter(){
    let count = 0;
    return function(){
        count++;
        return count;
    };
}
const counter = createCounter();
console.log(counter()); //1
console.log(couter()); //2
```
**Speaking Script**: * Powerful feature in JS, allowing functions to remember the env in which they were created. This enables functions to retain access to variables from their lexical scope even after that scope has exited. `InShort` a counter function can maintain its state between calls due to closures, as shown in example.*

