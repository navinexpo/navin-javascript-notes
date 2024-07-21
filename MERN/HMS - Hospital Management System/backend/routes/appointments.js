// import express from "express";
import Appointment from "../models/Appointment.js";

router.route("/").get((req, res) => {
  Appointment.find()
    .then((appointments) => res.json(appointments))
    .catch((err) => res.status(400).json("Error " + err));
});

//Add new appointment
router.route("/add").post((req, res) => {
  const { patientName, doctorName, date } = req.body;
  const newAppointment = new Appointment({ patientName, doctorName, date });

  newAppointment
    .save()
    .then((savedAppointment) => res.json(savedAppointment))
    .catch((err) => res.status(400).json("Error " + err));
});

//update appointment data
router.route("/update/:id").post((req, res) => {
  Appointment.findById(req.params.id).then((appointment) => {
    appointment.patientName = req.body.patientName;
    appointment.doctorName = req.body.doctorName;
    appointment.date = req.body.date;

    appointment
      .save()
      .then(() => res.json("Appointment updated!"))
      .catch((err) => res.status(400).json("Error " + err));
  });
});

//delete appointment
router.route("/delete/:id").delete((req, res) => {
  Appointment.findByIdAndDelete(req.params.id)
    .then(() => res.json("Appointment Deleted!"))
    .catch((err) => res.status(400).json("Error " + err));
});

module.exports = router;
