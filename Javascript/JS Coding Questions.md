### Array and Object Javascript Mostly asked Quuestions:

# Write a function to flatten a nested array. 
**Example**
- `[1,[2,3,4],5]` become `[1,2,3,4,5]`
```
function flattenArray(arr){
    return arr.reduce((acc, val)=> Array.isArray(val) 
    ? acc.concat(flattenArray(val)
    : acc.concat(val), []))
}
```
# DeepClone an Object
- Write a function to deeply cloned a nested object. 
