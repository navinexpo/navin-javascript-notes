console.log("JS Coding Problems")

// console.log("max number-1",maxNumber([1,2,3]));

// // using method 
// let array = [1,2,3]
// console.log("max number-2",Math.max(...array))
// console.log("min number",Math.min(...array))

// // Write a JavaScript function to check if a given string is a palindrome
// // using core js

// const str = "radar"
// function palimdrome(str){
//     let reverseValue = ""
//     for(let i=str.length-1; i>=0 ; i--) {
//         reverseValue += str[i]
//     }
//     return str === reverseValue
// }
// console.log("palidrome-1",palimdrome(str));

// // Write a JavaScript program to reverse a given string. 
// const reverseString = (str) => str.split("").reverse().join(""); 
// console.log("palidrome-2",reverseString(str));

//Checking prime number using Flag variable
// function checkPrime(num){
//     let i, flag=true;
//     for(i = 2; i<=num-1; i++){
//         if(num%i==0){
//             flag = false;
//             break;
//         }
//     }
//     if(flag==true){
//         console.log(num + " is a prime")
//     } else {
//         console.log(num + " is not a prime")
//     }
// }
// checkPrime(5)
// checkPrime(4)

// write a function where the code is going to satisfy the hoisting concepts. 
if(1){
    function addCount(){
        return 3+3
    }
}
console.log(addCount)

/*
    - function act as a block scope. 
    - Inside the if block, the block does not execute, the function is not defined in the current scope. (global scope)
    - if(0) evaluates to 'false' because 0 is a falsy value in js ( any num than 0 is truthy)
    - the function is not defined or accessible outside of this block. 
    - function is not defined in the current scope. 
*/


// *** Write a function which take string and returns the string with first letter caps and the rests are in lowercase. 
function toTitleCase(str){
    let res = '';
    let capitalzeChar = true; // flag to indicate if the next char should be capitlize

    let i;
    for(i=0; i< str.length; i++){
        let char = str[i];

        if(char === ' '){
            //if the current is a space, add it to the result and set the flag to capatalize the next character 
            res = res + char;
            capitalzeChar = true;
        } else {
            // if caps is true, convert the cahr in uppercase, otherwise lower case. 
            if(capitalzeChar){
                res = res + char.toUpperCase();
                capitalzeChar = false; 
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


// *** Write a function 