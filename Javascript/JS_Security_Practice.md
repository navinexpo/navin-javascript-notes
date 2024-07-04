# Refer: [https://dev.to/buildwebcrumbs/javascript-security-simple-practices-to-secure-your-frontend-18ii?ref=dailydev]

- Keep an eye on dependencies Up-to-Date.
- Use simple security headers: 
```javascript
<!-- Add to the <head> section of your HTML -->

<meta http-equiv="Content-Security-Policy" content="script-src 'self';"> 
```
- Sanitize user input: 
```javascript
const userInput = document.querySelector('#user-input').value;

document.getElementById('output').textContent = userInput; 
// Safely add user content to your page
```