const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Drones = require("../models/Drone.model");
// require the Drone model here

router.get("/drones", async (req, res, next) => {
  // Iteration #2: List the drones
  const dronesFromDB = await Drones.find();
  console.log(dronesFromDB);
  res.render("drones/list.hbs", { dronesFromDB });
});

router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form.hbs")
});

router.post("/drones/create", async (req, res, next) => {
  // Iteration #3: Add a new drone
  const droneForm = new Drones({ ...req.body });
  console.log({droneForm});
  await droneForm.save()
  res.redirect("/drones");
});

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
