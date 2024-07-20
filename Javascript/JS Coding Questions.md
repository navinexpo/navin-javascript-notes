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

# write the function where the first letter should be the capital letter and rest of the words are small letters for each word in the sentence.

```javascript
function toTitleCase(str) {
  let res = "";
  let capitalzeChar = true; // flag to indicate if the next char should be capitlize

  let i;
  for (i = 0; i < str.length; i++) {
    let char = str[i];

    if (char === " ") {
      //if the current is a space, add it to the result and set the flag to capatalize the next character
      res = res + char;
      capitalzeChar = true;
    } else {
      // if caps is true, convert the cahr in uppercase, otherwise lower case.
      if (capitalzeChar) {
        res = res + char.toUpperCase();
        capitalzeChar = false; //reset the flag
      } else {
        res = res + char.toLowerCase();
      }
    }
  }
  return res;
}
const exampleString = "hello world! this is a test string.";
const titleCasedString = toTitleCase(exampleString);
console.log(titleCasedString);
```
