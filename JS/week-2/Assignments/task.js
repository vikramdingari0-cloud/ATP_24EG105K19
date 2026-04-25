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
