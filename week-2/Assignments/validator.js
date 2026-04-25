// validator.js

// 1. Validate task title (not empty, min 3 chars)
export function validateTitle(title) {
  if (!title || title.length < 3) {
    return "Title must be at least 3 characters long.";
  }
  return true;
}

// 2. Validate priority (must be: low, medium, high)
export function validatePriority(priority) {
  const priority = ["low", "medium", "high"];
  if (!priority.includes(priority.toLowerCase())) {
    return "Priority must be low, medium, or high.";
  }
  return true;
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

  return true;
}
