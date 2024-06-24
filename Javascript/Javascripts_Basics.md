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

# `14` Object.freeze()
**Makes an object immutable. preventing new properties from being added and exsisting properties from being changed or removed.**
```
let obj = {
    prop: 43;
}
Object.freeze(obj);
obj.prop = 56; //no effect, as the object is frozen.
console.log(obj.prop) //43;
```
**Speaking Script**: *Object.freeze() is a method that prevent any modifications to an object. Once an object is forzen, its properties cannot be added. removed or alterred. This is useful for creating immuntable objects. which can help ensure data integrity and avoid unintended side effects in code.*

# `15` Debounce and Throttle
 - **`debounce` limits that `rate` at which a function is executed by `delaying the execution` until a certain time as passed since the `last call`**
 - *`throttle` limits the rate by ensuring a function is executed at most once in a `specified time period`**
 ```
 function debounce(fun, delay){
    return function(...args){
        clearTimeout(timeoutId);
        timeoutId = setTimeout(()=> fun.appy(this, args), delay);
    };
 }

 function throttle(fun, limt){
    let lastFun;
    let lastRan;
    return function(..args){
        if(!lastRan){
            fun.appy(this, args);
            lastRan = Data.now();
        } else {
            clearTimeout(lastFun);
            lastFun = setTimeout(function(){
                if((Date.now() - lastRan) >= limit){
                    fun.apply(this, args);
                    lastRan = Date.now();
                }
            }, limit - (Data.now() - lastRan))
        }
    };
 }

 *usages*
 window.addEventListner('resize', debounce(()=> {
    console.log('Resize event debouned');
 }, 500));

 window.addEventListner('scroll', throttle(()=> {
    console.log('Scroll event throttled!');
 }, 200))
 ```
**Speaking Script**: *both the techniques for controlling the rate at which a function is executed*
- `debounce` *delays the function execuation until a specified time has passed since the last call, which is useful for events like window resizing.*
- `throttle` *ensures the function is executed at most once per speicrf interval, making it ideial for rate-limiting events like scrolling. These techniques optimizing performance by reducing the frequency of function calls.*

# `16` Modules in JS
**These are reusable pieces of code encapsulated in their own scope, exported and imported into other scripts.**
```
//module.js
export const myFunction(){
    console.log('THis is a module function');
};

//main.js
import { myFunction} from './module.js'
myFunction(); // This is a module function.
```
# `17` Event Loop
**Its a mechanism that handles asynchronous ops by proccessing the `event queue` and executing `callback` function when the `call stack` is empty.**
```
console.log('Start')

setTimeout(()=> {
    console.log('Timeout');
},0);

Promise.resolve().then(()=> {
    console.log('Promise')'
});
console.log('End')
```
**Speaking Script**: *Its a core concpet for understanding the js async behavior. Its `process` events and executes `callback functions` from the `event queue` when the call stack is empty. For example: if you set a timeout with a delay of `zero`, it will be executed after the current call stack is cleared. Similarly, `microtasks` like promises have higher proiorty over `macrotasks` like setTimeout*

# `19` Spread Operator
**The spread operator (`...`) allows an iterable to be expanded in places where zero or more argument or elements are expected.**
```
let arr1 = [1,2,3]
let arr2 = [...arr1, 4, 5]; // [1,2,3,4,5]

let obj1 = {a:1, b:2};
let obj2 = {...obj1, c:3}; // {a:1, b:2, c:3}
```
**Speaking Script**: *The spread operator is a versalite tool expands iterables such as arrays or objects into individual elements. It simplies ops like array concatenation and object merging. for eg: you can easily create a new array or object by spreading the elements of an existing one, resuting in cleaner and more readable code.*

# `20` Error Handling in JS
**Errors in JS can be handled using `try..catch` blocks, allowing you to gracefully manage exceptions and continue execution.**
```
try{
    let res = riskyOps();
    console.log(res)
} catch(error){
    console.log(error)
} finally{
    console.log('Cleanup code can go here);
}
function riskyOps(){
    throw new Error('This is a deliberate error);
}
```

**Speaking Script**: *Its `essential` for building robust application. The `try-catch` construct allows you to catch exceptions and handle them gracefully wihtout crashing your application. You can also use the `finally` block to execute code that should run regardless of whether an error occured, such as cleanup ops. This approach ensures that your application can handle unexpected situtions an continue to function smoothly.*

# `21` Events and Events Object in JS
 - **Events are actions that happen in the web pages like clicking the button and submit the form.**
 - **The listner listens out for the event happening and the handler is the code that is run in response to it happening.**
 ```
 element.addEventListner(event, function, useCapture)
 ```
 - `1` first paramenter is the type of the evnt like `click` or `mousedown`. 
 - `2` Second parameter is the function we want to call when the even occurs. 
 - `3` Third parameter is optional, it s boolean value specifing whether to sue event bubbling or event capaturing.

# `22` Session Storage vs Local Storage
**`session storage` is used to store data only for a session, meaning that it is stored until the browser is closed.**
*The data in session storage never transfered to the server and can only be read on client side.*
```
let key = 'Entry1';
localStorage.setItem(key, 'value');

//reading enteries
let myItem = localStroage.getItem(key);

//deleting enteries
localStorage.removeItem(key)

//clear enteries
localStroage.clear();
```
# `23` Yield
**The yield keyword pauses the generator function execution, and the value of the expression following the yield keyword is returned to the generartor's caller.**
- It acts as a generator-based version of the return keyword. 
```
function* generator(){
    yield 1; // we pause the execuation here 
    console.log('start') // when we resume we are here.
}
```

# `24` next() method: 
**A generator gives a next() method which is used to resume the exection.**
- It return a `object` with two properties 
`value`
`done`

```
{
    value: [next value];
    done: [ true if we reach end, else false]
}
```

## Toggle Content Example

<details>
  <summary>Click to expand</summary>
  <p>This is the content that can be toggled. You can include any Markdown or HTML content here.</p>
  <ul>
    <li>List item 1</li>
    <li>List item 2</li>
    <li>List item 3</li>
  </ul>
</details>

## Code Snippet with Custom CSS

<style>
  .red-text { color: red; }
  .blue-text { color: blue; }
</style>

Here is a code snippet with colored text:

```html
<pre><code>
<span class="red-text">def hello_world():</span>
<span class="blue-text">    print("Hello, world!")</span>
</code></pre>
```
# `25` Javascript String Methods: 
- "Hello".charAt(4) --------------------> `o`;
- "Hello".concat("", "world") ---------->`Helloworld`
- "Hello".startsWith("H") -------------->`true`
- "Hello".endsWith("o")-----------------> `true`
- "Hello".includes("x") ---------------->`false`
- "Hello".lastIndexOf("l") -------------> `3`
- "Hello".indexOf("l") ----------------->`2`
- "Hello".match(/[A-Z]/g) --------------> `["H"]`
- "Hello".padStart(6, "?") ------------->`?Hello`
- "Hello".padEnd(6, "?") ---------------> `Hello?`
- "Hello".repeat(3) --------------------> `HelloHelloHello`
- "Hello".replace("llo", "y") ---------->`Hey`
- "Hello".search("e")-------------------> `1`
- "Hello".slice(1,3)--------------------> `el`
- "Hello".split(") --------------------->`['H','e','l','l','o']`
- "Hello".substring(2,4)----------------> `ll`
- "Hello".toLowerCase() ---------------->`hello`
- "Hello".toUpperCase() ---------------->`HELLO`
- "Hello".trim() ----------------------->`Hello`
- "Hello".trimStart() ------------------>`Hello`
- "Hello".trimEnd()---------------------> `Hello`

# `26` What is the Webpack and its working: 
- Its a tool that help us to bunddle the JS files and other assets into a sigle file or a few files that can be easily loaded in a web browser. 

**Why do we need webpack?**
- *Our project become quite large with many files. Webpack automate this process and optimize your files for better performance.*

- `1` **Entry points**: index.js or app.js. Think of this as front door to your house. This is where webpack starts its journey.
- `2` **Modules**: 
*It looks at the `entry-points` and starts follow all the import statements to gather all the dependencies.*
-Imagine walking through the house and picking up all the items(files) you need. 
- `3` **Loaders**: 
*Loaders are like translators*: They help webpack understand and prcess different types of files(like css, image, etc), they are not js. 
- `4` **Plugins**: 
*These are tools that perform specifc tasks during the building process. They can optimize your files, clean build directory, and much more.*
- `5` **Output**: 
*Once webpack has gathered all the files and processed them. it bundles them into one or more output files.*
