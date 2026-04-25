// Assignment 1: 
// -------------
// Task Management System (ToDo App Modules):
//      Building a task manager like Todoist

// Requirements:
//      Create a modular todo app with 3 separate files:

       
          
//         i. validator.js - Input validation
//                       // TODO: Export these validation functions
                      
//                       // 1. Validate task title (not empty, min 3 chars)
//                       function validateTitle(title) {
//                         // Your code here

//                       }
                      
//                       // 2. Validate priority (must be: low, medium, high)
//                       function validatePriority(priority) {
//                         // Your code here
//                       }
                      
//                       // 3. Validate due date (must be future date)
//                       function validateDueDate(date) {
//                         // Your code here
//                       }



//        ii. task.js - Task operations
//                     // TODO: Import validator functions
//                     // import { ... } from './validator.js';
                    
//                     const tasks = [];
                    
//                     // 1. Add new task
//                     function addTask(title, priority, dueDate) {
//                       // Validate using imported functions
//                       // If valid, add to tasks array
//                       // Return success/error message
//                     }
                    
//                     // 2. Get all tasks
//                     function getAllTasks() {
//                       // Return all tasks
//                     }
                    
//                     // 3. Mark task as complete
//                     function completeTask(taskId) {
//                       // Find task and mark as complete
//                     }

//                   // Export functions


//       iii. app.js - Main application
//                   // TODO: Import task functions
//                   // import { ... } from './task.js';
//                   // Test your module system
//                   // 1. Add some tasks
//                   // 2. Display all tasks
//                   // 3. Complete a task
//                   // 4. Display all tasks again

// validator.js

// 1. Validate task title (not empty, min 3 chars)
export function validateTitle(title) {
  if (!title || title.trim().length < 3) {
    return "Title must be at least 3 characters long.";
  }
  return null;
}

// 2. Validate priority (must be: low, medium, high)
export function validatePriority(priority) {
  const allowed = ["low", "medium", "high"];
  if (!allowed.includes(priority.toLowerCase())) {
    return "Priority must be low, medium, or high.";
  }
  return null;
}

// 3. Validate due date (must be future date)
export function validateDueDate(date) {
  const today = new Date();
  const inputDate = new Date(date);

  if (isNaN(inputDate.getTime())) {
    return "Invalid date format.";
  }

  if (inputDate <= today) {
    return "Due date must be a future date.";
  }

  return null;
}

// task.js

import {
  validateTitle,
  validatePriority,
  validateDueDate
} from "./validator.js";

const tasks = [];
let idCounter = 1;

// 1. Add new task
export function addTask(title, priority, dueDate) {
  const titleError = validateTitle(title);
  const priorityError = validatePriority(priority);
  const dateError = validateDueDate(dueDate);

  if (titleError) return titleError;
  if (priorityError) return priorityError;
  if (dateError) return dateError;

  const newTask = {
    id: idCounter++,
    title,
    priority,
    dueDate,
    completed: false
  };

  tasks.push(newTask);

  return "Task added successfully!";
}

// 2. Get all tasks
export function getAllTasks() {
  return tasks;
}

// 3. Mark task as complete
export function completeTask(taskId) {
  const task = tasks.find(t => t.id === taskId);

  if (!task) {
    return "Task not found.";
  }

  task.completed = true;
  return "Task marked as complete.";
}

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