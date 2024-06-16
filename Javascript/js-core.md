## JavaScript 

# Reference Type
```
var x = ['March','Feb'] ==> *Array*
var x = {name: 'navin', age: 20} ==> *Object*
vr x = function(){...}  ==> *function*
var x = new Date(); ==> *date*
```

- JS stores the `primitive` value on `stack` becoz the size of primitive values is `*fixed*`.
- JS stroes a `reference` value on the `heap` becoz the size of the reference value is `*dynamic*`
- `Note`: Diff between primitive data and reference data is that, if the value is `primitive` then we manipulate the `actual value` stored in the variable. *whereas*, if the value is of reference data type, we can manipulate that `object` reference, rather than the actual object means **A variable that stores in object is accessed by its reference.**

# Type of Conversion: 
- Explicit Conversion.
- Implicit Converstion.

- `1`: The `type` converstion that we manaually do is known as `explict` type converstion. 

## explict type conversion: 
- Number: 
```
Value             Return
Undefined ------> NaN
Null -----------> 0
true/false------> 1/0
String----------> white space from the start and end are removed. If remaining string is empty, res is 0, else number is 'read from the string. If the string contains any aplhabet like 67a09B, it give  `NaN` error.
```
## Boolean conversion: 
- NaN, 0, undefined ----> `false`.
- Everthing else inclues objects --> `True`.

## String conversion: 
- Used to convert numbers to strings. Can be used by any type of numbers, literals, variables or expression toString() does the same.

## ParseInt and parseFloat: 
- They return numbers fro string that start with numeric data.
```
console.log(parseInt('$100 dollars')) ---> NaN
console.log(parseInt('+10.24 Kg'))    ---> 10 
console.log(parseFloat('+10.2342 Kg'))---> 10.2342
```

## **When we add a number into a string, JS converts the numbers to a string before concetenation.**
- Conversion To string: 
```
let a = '9' + true;
console.log(a)
// 9true
```
- Conversion to numbers: 
```
let a = '4` - 4;
console.log(a)  ---> 0
let be = '4' * 4;
console.log(b)  ---> 16
```
- Boolean Conversion to Number: 
```
let a = '5' - true;
console.log(a) ----> 4
```
- *In JS `Null` is considered as `0` when used with numbers*
- *Arithmetic ops of undefined with numbers, boolean or nulls returns `NaN`.*

`charAt(c)`: returns the caractoer at the `c` position within the string.

`indexof(substr, [start_from])`: This method searches and retursn the `index number` of the searched character within the string. If not found, it will return `-1`. "Start_From" is an optional argument specifying the position within string to begin the search default is `0`. 

```
var str1 = 'Hi, My name is navin'
let str2 = str1.indexOf("navin")
console.log(str2)
output: 15
```
`slice(start, [end])`: Returns a substring of the string based on the `start` and `end` index. it won't include the `end` index itself. 
- `End` argument is optional, and if none specified, the slice includes all characters from 'start' to end of string.

```
let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

// Extract from index 1 to 3 (not including index 3)
let slicedFruits = fruits.slice(1,3)

console.log(slicedFruits): // ['Baana', 'Cherry']
```
**Speaking Script**: *Its used to extract a portion of an array or a string and return its as a new array or string. It doesnot modify the orginal array or string*

`split(delimiter, limit)`: Its split a string into substring to the specified delimiter, and returns an `array` containing each element. 
- The argument `limit` is an integer that specifies the max no. of element return. 
```
let txt = 'a,bc,c,d';
let res = txt.split(",")
console.log(res)
```
# Modifying Arrays: 
- `push()`: returns the length of new array. 
```
let f = ['a', 'b', 'c']
consloe.log(f.push('d'))
// ['a', 'b', 'c', 'd']
```
- `pop()`: returns last element and returns that element 
```
let f = ['a','b']
consoloe.log(f.pop('b'))
// ['a']
```
- `shift()`: Removes 1st element and returns that element
```
console.log(f.shift)
// ['b']
```
- `unShift()`: return new length of array. adds one or more element to the begining of the array. 
```
console.log(f.unShift('d')); //2
```
- `splice()`: used to remove or add an item by index position. 
```
let y = ["a", "b", "c", "d", 'e'];
console.log(y.splice(1,3, 'f'))
```