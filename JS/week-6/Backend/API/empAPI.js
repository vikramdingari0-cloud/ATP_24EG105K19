const express = require("express");
const router = express.Router();

const Employee = require("../model/empmodel");


//  CREATE
router.post("/", async (req, res) => {
  try {
    const emp = new Employee(req.body);
    const saved = await emp.save();
    res.send(saved);
  } catch (err) {
    res.status(500).send(err);
  }
});


//  GET ALL
router.get("/", async (req, res) => {
  try {
    const data = await Employee.find();
    res.send(data);
  } catch (err) {
    res.status(500).send(err);
  }
});


//  UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updated = await Employee.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.send(updated);
  } catch (err) {
    res.status(500).send(err);
  }
});


//  DELETE
router.delete("/:id", async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);
    res.send({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;