## Optional Chaining (?.)
- Introduced in 2020 ECMA Script, allows you to read the value of a property located deep within a chain of connected objects without having to check that each reference in the chain is valid. 

```javascript
let name = person?.address?.street?.name;
```

## Nullish Coalescing (??): 
- Introduced in 2020 ECMA Script, the nullish Coalescing operator `returns` the first `operand` if its not `null` or `undefined`, and the second operand otherwise. 
```javascript
let name = person?.name?? 'Unknown';
```
## BigInt: 
- A new numeric primitive in JS, BigInt is used to represent integers with arbitary precision, allowing for accurate calculations with large integers. 
```javascript
const x = 123456789n;
```
## globalThis
- A new gloabl object, `globalThis` provides a way to access the global object in the way thats compatible with modern js env. 
```javascript
consloe.log(globalThis === window); // true in browser. 
```

## MatchAll(): 
- A new method on the string prototype, matchAll(), return an iterator that yields matches of a regular expression against a string, including capturing groups. 

```javascript
const regex = /(\w)(/d)/g;
const str = 'abs342';
for( const match of str.matchAll(regex)){
    console.log(match);
}
```
## Promise.allSettled(): 
- It returns a proimse that is resolved when all the promises in an array are either resolved or rejected. 
```javascript
const promise = [Promise.reslove('a'), Promise.reject('b'), Promise.reslove('c')];
Promise.allSettled(promises).then((res)=> console.log(res));
```
## String.prototype.at(): 
- A new method on the string prototype, at() returns the character at the specified index, allowing for negative indices to access characters from the end of the string. 
```javascript
const str = 'hello';
consoloe.log(str.at(0)); // 'h'
console.log(str.at(-1)); // 'o'
```
## Error cause: 
- Cause allows you to specify the underlying cause of an error. 
```javascript
try{
    throw new('Error occured', { cause: new Error('Underlying cause')});
}catch (error){
    console.log(error.cause)
}
