import mongoose from "mongoose";

const Schema = mongoose.Schema;

const doctorSchema = new Schema({
  name: { type: String, required: true },
  specialty: { type: String, required: true },
});

const Doctor_Model = mongoose.model("Doctor_Model", doctorSchema);

// module.exports = Doctor_Model;

export default Doctor_Model
