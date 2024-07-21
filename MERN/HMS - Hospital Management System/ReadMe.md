## MERN Project - HMA (Hospital Management System)

# Install packages: 
- `Backend` : npm i express cors mongoose nodemon body-parser

# Database: 
-

# Backend: 
- npm init -y
- create file: server.js (Entry Point)

# Frontend: 
- 


### Approach to create backend
*Create mongoDB Model*: 
- Design monogoDB models for `Appointment`, `Doctor`, and `Patient` in separate files (`Appointment.js`, `Doctor.js` and `Patient.js`)
- `Patient` in separate files. 

*Setup Express Routes*: 
- Create separate routes for appointments, doctors, patients 
- Implement CRUD ops for earch resources. 

*Connect to MongoDB*: 
- In main `server` file connect to  mongodb using mongoose. 
- Include hanlde connection error. 
