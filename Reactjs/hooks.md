
Heading: `#`, `##`, `###`
Bold: **bold**
italic: *italic*
code block: ``code``
list: - `list` or `1. item`
links: `[title](https://js.com)`


# useState
**React hooks are functions that let use state and other features in functional components.**
- `1.` Manages state in a functional components.
- `2.` useState returns a state variable and a function to a update it. Its used to keep track of the state in a component.

```
const [ count, setCount ] = useState
```
# useEffect
** Handles side-effects in a functional Component. Its akin to lifecycle methods in class components (like: componentDidMount, componentDidUpdate, componentWillMount).**
- `1`. Side effects are operations that interact with the outside world like data fetching, DOM manipulation, setting up subscriptions and timers. 
- `2`. Effect Function: containing the side effect.
- `3`. Dependency Array: An array of dependencies that, when changed. trigger the effect function. 

```
useEffect(()=> {
    <!-- side effect logic here -->
},[dependencies])
```
**for Instance (Analogy to a smart home system):** *Imagine our component is smart home system and the `useEffect` is our smart assistance.*
- `a`. Initial Setup (componentDidMount): 
*when you first setup your home, your smart asistant configures all the devices and connnections (setting up lights, carparts, bells etc.).*
- `b`. Routine adjustments (componentDidUpdate): 
*Your smart asistant monitors changes, such as temperature adjustments or new devices being added, and takes appropriate actions.*
```
useEffect(()=> {
    console.log("Adustiing setting based on changes");
    //logic that depends on changes
},[temp, devices]);
```
- `c`. Cleanup (componentWillMount)" 
*When you move out or make significant changes, your smart assistant ensures that all devices are turned off, and connections are safely removed*

```code
useEffect(()=> {
    console.log('Setting up the device');
    return () => {
        console.log('Clean up device');
        // clean up logic
    }
},[]);
```
**conditional Execuation**
By controlling the dependency array, you can finely tune when the effect should run. An empty array (`[]`) runs it only once. mimicking `componentDidMount`.
**Performance optimization**
Aviod unnecessary re-renders by listing only relevant dependencies.
**Async Operations**
For data fetching, use async functions within the effect to handle promises efficiently. 
```
useEffect(()=> {
    let isSubsribed = true; *//To prevent state update after unmount*

async function fetchData(){
    const res = await fetch("https://api.example.com/data")
    if(isSubscribed){
        // handle the result
    }
}
fetchData()

return () => {
    isSubscribed = false; *//cleanup to prevent memeory leaks
};
}, [dependency]);
```

# useReducer
- `Purpose`: Manages state with a reducer in a functional component.
- `Explanation`: `useReducer` its an alternate of useState. involves multiple sub-values or when the next state depends on the previous one. Its an alternative to `useState`.
```
const [state, dispatch] = useReducer(reducer, initialState).
```

# useCallback
- `Purpose`: Memoize function. 
- `Explanation`: it returns a memoized version of a callback function that only changes if one of the dependencies has changed. Its useful for optimizing child component re-renders.
```
const memoziedCallback = useCallback(()=> {
    doSomething...(a,b)
},[a,b]);
```
# useMemo
- `Purpose`: Memozied value.
- `Explanation`: It returns a memoized value that only recalculates if one of the dependencies changes, its use to optmize the performance by avioding expensive calculations on every render.
```
const memoizedValue = useMemo(()=> computeExpensiveValue(a,b), [a,b])
```