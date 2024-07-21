import mongoose from "mongoose";

const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  patientName: { type: String, required: true},
  doctorsName: { type: String, required: true},
  date: {type: Date, required: true},
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

// module.exports = Appointment

export default Appointment