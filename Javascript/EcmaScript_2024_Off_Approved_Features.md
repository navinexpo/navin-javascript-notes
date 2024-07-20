# 20-07-2024

1. `Promise.withResolvers()`

- _This method simplifies the creation and management of promises by returning both the promise and its resolver functions in a single call._
- _This method returns and `object` that contains the promise along with its reslover functions_

```javascript
const { promise, resolve, reject } = Promise.withResolves();
//simulating and async operation
setTimeout(()=> {
    reslove("Operation successful!);
},1000);
promise
    .then((res)=> console.log(res))
    .catch((err)=> console.error(err));
```

- note: const { promise, resolve, reject } = Promise.withResolvers() provides object with promise, resolve and reject properties.

## Use Case 1: Handling async operations:

```javascript
//using Promise.withResovlers() for an async operation
function fetchData(url) {
    const { promise, resolve, reject} = Promise.withResolvers();
    fetch(url)
        .then((res)=> {
            if(res.ok){
                return res.json();
            } else {
                reject('Network response was not OK !);
            }
        })
        .then(data => resolve(data))
        .catch( err => reject(err));

        return promise;
}

fetchData('http://api.sxy.com/data')
    .then(data => console.log('Data received', data))
    .catch(err => console.log('Error', err))
```

## Use Case 2: Co-ordinating multiple async operations:

- Sometime we need to coordinate multiple asyn ops and resolve a promise when all of them are completed.

```javascript
function performOperation(){
    const { promise, resolve, reject} = Promise.withResolvers()

    let count 0;

    function checkComplete(){
        if(++count === 3){
            resolve('All Ops completed!);
        }

    setTimeout(()=> {
        console.log('Ops 1 completed);
        checkCompleted();
    }, 1000)

    setTimeout(()=> {
        console.log('Ops 2 completed');
    }, 1500)

    setTimeout(()=> {
        console.log('Ops 3 completed');
    }, 3000);
    return promise;
    }
    performOperations()
        .then(msg => console.log(msg));
```
