import express from 'express'
import mongoose  from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser'

import {appointmentsRouter} from './routes/appointments.js';
import {doctorsRouter} from './routes/doctors.js'
import {patientRouter} from './routes/patients.js'

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json())

//connect to DB
mongoose.connect("mongodb+srv://ncodify:Navin151@hms.pjhhidk.mongodb.net/hospital");
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB connection established....")
});

// //provide routes 
app.use('/patients', patientRouter);
app.use('/doctors', doctorsRouter);
app.use('/appointments', appointmentsRouter)

app.listen(PORT, ()=> {
console.log(`Server is running on ${PORT}`)
})