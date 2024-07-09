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

# write a function to find the maximum number of elements in the array. 


# Write a function and it accept string and now you have to count the vowels into the string. 
- 