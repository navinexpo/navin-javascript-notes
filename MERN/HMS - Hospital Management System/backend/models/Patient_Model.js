import mongoose, { mongo } from "mongoose";

const Schema = mongoose.Schema;

const patientSchema = new Schema({
    name: { type: String, required: true},
    age: { type: number, required: true},
    gender: { type: String, required: true},
});

const Patient_Model = mongoose.model("Patient_Model", patientSchema);

// module.exports = Patient_Model;

export default Patient_Model