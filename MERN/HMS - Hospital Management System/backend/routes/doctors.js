import express from "express";
import  Doctor_Model  from "../models/Doctor_Model.js";

const router = express.Router();

//Get all Doctors
router.route("/").get((req, res) => {
  Doctor_Model.find()
    .then((doctor) => res.json(doctor))
    .catch((err) => res.status(400).json("Error " + err));
});

// Add new Doctor

router.route("/add").post((req, res) => {
  const { name, specialty } = req.body;

  const newDoctor = new Doctor({ name, specialty });

  newDoctor
    .save()
    //return the savedDoctor object
    .then((savedDoc) => res.json(savedDoc))
    .catch((err) => res.status(400).json("Error " + err));
});

//Update the doctor data
router.route("/update/:id").post((req, res) => {
  Doctor_Model.findById(req.params.id).then((doc) => {
    if (!doc) {
      return res.status(404).json("Doctor not found");
    }
    doc.name = req.body.name;
    doc.specialty = req.body.specialty;

    doc
      .save()
      .then(() => res.json("Doctor updated!"))
      .catch((err) => res.status(400).json("Error " + err));
  });
});

// Delete doctor by id

router.route('/delete/:id').delete((req, res)=> {
    Doctor_Model.findByIdAndDelete(req.params.id)
        .then(docy => {
            if(!docy){
                return res.status(404).json('Doctor not found');
            }
            res.json('Doctor deleted!')
        })
        .catch(err => res.status(400).json('Error ' + err))
})

module.exports = router;