// app.js

import {
  addTask,
  getAllTasks,
  completeTask
} from "./task.js";

// 1. Add some tasks
console.log(addTask("Learn JavaScript", "high", "2026-03-01"));
console.log(addTask("Workout", "medium", "2026-04-10"));
console.log(addTask("Read", "low", "2025-01-01")); // Invalid past date

// 2. Display all tasks
console.log("\nAll Tasks:");
console.log(getAllTasks());

// 3. Complete a task
console.log("\nCompleting Task ID 1:");
console.log(completeTask(1));

// 4. Display all tasks again
console.log("\nUpdated Tasks:");
console.log(getAllTasks());