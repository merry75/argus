const express = require("express");
const router = express.Router();
const Vehicle = require("../../models/Vehicle");

// @route         GET api/vehicles/test
// @description   Tests users route
// @access        Public

router.get("/test", (req, res) => res.json({ msg: "vehicles route test" }));

// @route         Post api/vehicles/
// @description   Post a vehicle
// @access        Public

router.post("/", (req, res) => {
  new Vehicle(req.body).save().then(vehicle => res.json(vehicle));
  console.log("test", req.body);
});

// @route   DELETE api/vehicles
// @desc    Delete vehicle by id
// @access  Public
router.delete("/:id", (req, res) => {
  Vehicle.findById(req.params.id).then(vehicle => {
    console.log("test2", req.params.id);
    vehicle.remove().then(() => res.json({ success: true }));
  });
});

// @route         GET api/vehicles/
// @description   Get all the vehicles
// @access        Public
router.get("/", (req, res) => {
  Vehicle.find().then(vehicles => res.json(vehicles));
});

// @route         PUT api/vehicles/id
// @description   Edit a specific vehicle
// @access        Public
router.put("/:id", (req, res) => {
  Vehicle.findByIdAndUpdate(req.params.id, req.body).then(() => {
    Vehicle.findOne({ _id: req.params.id }).then(vehicle => {
      res.send(vehicle);
    });
  });
});

module.exports = router;
