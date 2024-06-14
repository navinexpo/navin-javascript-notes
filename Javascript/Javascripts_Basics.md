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
**Speaking Script**: *Powerful feature in JS, allowing functions to remember the env in which they were created. This enables functions to retain access to variables from their lexical scope even after that scope has exited. `InShort` a counter function can maintain its state between calls due to closures, as shown in example.*

# Hoisting
- **Its a `behaviour` of moving declarations to the top of the current scope.**
```
console.log(hositedVar) //undefined, due to hoisting
hoistedVar = 5;

hoistedFunction(); // "hoisted! due to hoisting
function hoistedFunction(){
    console.log('Hoisted!)
}
```

**Speaking Script**: *Hoisting in JS lifts variable and function declartions to the top of their containing scope during compilation.* 
- `a` This means you can use functions and variables before they're declared in the code. 
- `b` For eg: calling a function before its definitions works coz declarations is hoisted, but using a variable before its assignment result in `undefined`.

# Promises: 
- **Promises represent the eventual completion or failure of an asynchronous operation and its resulting value.**
```
let promise = new Promise((resolve, reject)=> {
    setTimeout(()=> resolve("Sucess!"), 1000);
});
promise.then(res => console.log(res)); Op: `Success`
```
**Speaking Script**" *Promises are a modern way to handle async ops in js. They provide a cleaner and more robust way to work with async code compareed to traditional callbacks. A promise can be in one of three states: fullfilling, pending, reject, it triggers the corresponding `then` or `catch` handlers. This improves readability and error handling in async code.*

# `==` vs `===`
- **`==` compares  values after type coercion, while `===` compares values withouth type coercion (strict equality).**
```
console.log(5 == '5') //true, due to type coercion
console.log(5 === '5') //false, strict equality check
```
**Speaking Script** *In js `==` Performs type coercion before comparing two values, which can lead to unexpected results. On the other hand, `===` check both the value and the type, ensuring a stricter and often safer comparision.*

# this keyword
- **`this` refers to the object it belongs to. In method, `this` referes to the owner object.**

```
const obj = {
    value: 24,
    getValue: function(){
        return this.value;
    }
};
console.log(obj.getValue()); //42
```
**Speaking Scritp** *The `this` keyword isn context-sensitive and refers to the object it belongs to.*
- `method`: Points to the object that owns the method, this allows to access and manipulate the properties fo their containing object. 

# async-await
**`async-await` is syntactic sugar built on promises, allowing for cleaner, more readable asyncronous code.
```
async function fetchData(){
    let res = await fetch("https://exa.com/data")
    let data = await res.jsoin()
    console.log(data);
}
fetchData();
```
**Speaking Script**: *`async-await` simplifies working with promises, making async code look and behave more like sync code. An `async` function returns a promises, and `await` pauses the execution of the function until the promises resloves, allowing for a more linear and readable flow of asynchronous ops.*
- this approach reduces the callback hell and improves error handling.

# Event Delegation
**"Its leverages event bubbling to handle events at a higher level in DOM."**
```
document.getElementById("parent").addEventListener("click", (event)=> {
    if(event.target &&  event.target.matches('button.classname')){
        console.log('Button Clicked')
    }
});
```
**Speaking Script**: *Event Delegation is a technique that involves using a single event listner to manage events for multiple elements. Instead of adding event listner to each individual child elements and we attached a single listner to each to thier common parent.*
- This listener capature events as they bubble up the DOM tree, allowing for more efficent and organized event handling, especially when dealing with dynamic content.

# Null vs Undefined
**`undefined`: means a variable has been declared but not assigned a value. `null` is an assignment value that represents no value.
```
let a;
console.log(a); // undefined

let b = null;
console.log(b); // null
```
**Speaking Script**: *`undefined` and `null` both represnt absence of value, but they are used in different contexts.*
- `undefined` indidcates that a variable has been declared but not assigned a value, while `null` is explicityle assinged to indiciate a delebrate  absence of value. 

# Higher Order Function
** Its a function that takes an function as a argument and retunrs a function as a result.
```
function HOC(5){
    return callback(5)
}
function multiplyTwo(num){
    return num*2;
}
console.log(HOC(multiplyByTwo)) //10
```
**Speaking Script**: *HOC are functions that either take other function as arguments or return fuctions as thier results. They are key feature of functional programming, enabling powerful abstractions and code resue. **for example** : HOC can accpet a callback function to customise its behavior, such as transforming as value or performing specific asctions on data.*

- `11`. **`map()` `filter()` and `reduce()`**
- `map()` creates a new array by transforming each element.
- `filter()` createa a new array with elements that pass a test.
- `reduce()` it reduce a array to a single value by appling a function.

```
let numbers = [1,2,3,4,5];

let doubled = numbers.map(n=> n*2); // [2,4,6,8,10]
let evens = numbers.filter(n=> n % 2 === 0); // [2,4]
let sum = numbers.reduce((acc, curr)=> acc + curr, 0 ); //15
```
**Speaking Script**: *these all three methods are powerful array methods for proccessing the data.*
- `map` applies a function to each element, producing a new array of transformed values.
- `filter` selects elements that meet a specified condition, creating a new array of filtered results.
- `reduce` accumulates all array elemetns into a single value, such as a sum or product, using a reducer function. 

# Prototype Chain
- `12` **Its a mechanism by which objects inhiret properties and methods from other objects.**
```
function Person(name){
    this.name = name;
}
Perons.prototype.greet = function(){
    console.log(`Hello, my name is ${this.name}`);
};
let navin = new Person('Navin');
navin.greet(); //Hello, my name is Navin.
```
**Speaking Script**: *Allows objects to inherit properties and methods from other objects. When a property or method is accessed, javascript first checks the object itself. if its `not found`, it searches the `prototype` chain, enabling inheritance. This mechanism underpins the object-oriented nature of js. allowing for shared behaviours and code resues.*

# Arrow Function
- `13` **Its syntactically shorter and lexically bind the `this` value. unlike regular functions which can be dynamically bind `this`**
```
let add = (a,b) => a+b;
    console.log(add(2,3)); //5

let obj = {
    value= 10;
    regularFunction: function(){
        setTimeout(function(){
            console.log(this.value) //undefined, as `this` refer to the global object.
        }, 1000);
    },
    arrowFunction: function(){
        setTimeout(()=> {
            console.log(this.value); //10, as arrow function lexically bind `this`
        }, 1000);
    }
};
obj.regularFunction();
obj.arrowFunction();
```
**Speaking Script**: *Arrow functions provide a more consise syntax for writing functions and automatically bind the `this` value from thier surrounding lexical context. This resloves many issues related to `this` in regular function., espically in callback functions.*
- `for instacne`: when using `setTimeout` inside a method, a regular function would lose the reference to the object, whereas an arrow fuction maintains it.