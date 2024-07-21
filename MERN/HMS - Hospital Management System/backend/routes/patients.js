import express from "express";

import  Patient  from "../models/Patient_Model.js";

const router = express.Router();

//Get all patient
router.route("/").get((req, res) => {
  Patient.find()
    .then((pat) => res.json(pat))
    .catch((err) => res.status(400).json("Errro " + err));
});

// Add new patient
router.route("/add").post((req, res) => {
  const { name, age, gender } = req.body;
  const newPatient = new Patient({ name, age, gender });

  newPatient
    .save()
    .then((savedPat) => res.json(savedPat))
    .catch((err) => res.status(400).json("Error " + err));
});

//update the patient

router.route("/update/:id").post((req, res) => {
  console.log("upate hiihihih");

  Patient.findById(req.params.id).then((pat) => {
    if (!pat) {
      return res.status(400).json("Patient not found");
    }
    pat.name = req.body.name;
    pat.age = req.body.age;
    pat.gender = req.body.gender;

    pat
      .save()
      .then(() => res.json("Patient Updated!"))
      .catch((err) => res.status(404).json("Error " + err));
  });
});

//delete patient

router.route("/delete/:id").delete((req, res) => {
  Patient.findByIdAndDelete(req.params.id)
    .then((pat) => {
      if (!pat) {
        return res.status(400).json("Patient is not found");
      }
      res.json("Patient Updated!");
    })
    .catch((err) => res.status(400).json("Error " + err));
});

exports.modules = router;
