import express from "express";
import { empModel } from "../model/empmodel.js";

export const empApp = express.Router();

// CREATE Employee
empApp.post("/emp", async (req, res) => {
  try {
    const newEmp = req.body;

    const newEmpDoc = new empModel(newEmp);
    await newEmpDoc.save();

    res.status(201).json({
      message: "Employee created",
      payload: newEmpDoc,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// READ All Employees
empApp.get("/emp", async (req, res) => {
  try {
    const empList = await empModel.find();

    res.status(200).json({
      message: "All employees",
      payload: empList,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// UPDATE Employee by ID
empApp.put("/emp/:id", async (req, res) => {
  try {
    const modifiedEmp = req.body;
    const uid = req.params.id;

    const updatedEmp = await empModel.findByIdAndUpdate(
      uid,
      { $set: modifiedEmp },
      { new: true } // ✅ correct option
    );

    if (!updatedEmp) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.status(200).json({
      message: "Employee updated",
      payload: updatedEmp,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE Employee by ID
empApp.delete("/emp/:id", async (req, res) => {
  try {
    const uid = req.params.id;

    const deletedEmp = await empModel.findByIdAndDelete(uid);

    if (!deletedEmp) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.status(200).json({
      message: "Employee deleted",
      payload: deletedEmp,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});