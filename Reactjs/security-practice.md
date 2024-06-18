# Minimize Attack Surface
*Reduce the amount of code exposed to the client-side to limit potential vulnerabilites*

```
//client side (simplified example)
function submitData(data){
    fetch('/api/submit', {
        method: 'POST',
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(resData => {
        console.log("Data submitted sucessfully:, resData");
    })
    .catch(error => {
        console.log("Error submitting data:", error)
    });
}
```
`note`: Move sensitive logic and data processing to the server-side whenever psossible. Use server-side rendering for critical parts of your applications. 
