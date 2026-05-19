# User Directory (reactApp1)

This project is a React application built with Create React App. Its primary purpose is to master the fundamentals of component-level React state, controlled inputs, form submission, and dynamic table rendering.

## Core Concepts Covered

* Local State Management (`useState`): Managing temporary interface values and persistent listing arrays inside memory.
* Controlled Components: Binding standard HTML inputs to state variables so React remains the single source of truth for UI data.
* List Rendering (`map`): Compiling JS arrays into dynamic HTML elements using unique key attributes.
* Form Validation: Creating boundary conditions to confirm input presence before mutating list data.

## Code Design and Components

All interactions are contained inside `src/App.js` under the `UserManagement` component:

### 1. State Structures
* `formData`: An object representing input elements:
  * `name`: Captures full name string.
  * `email`: Captures email string.
  * `age`: Captures age numeric value.
* `users`: An array containing user objects appended on successful form submissions.

### 2. Controlled Input Binding
The inputs utilize a generic state change handler to dynamically bind names to values:
const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};

### 3. Submission Flow and Validations
On triggering submit, `handleSubmit` runs the following validations:
* Validation Check: Confirms all inputs are populated. If empty, raises a browser alert dialog and halts execution.
* List Mutation: Commits the new user by copying the old collection and appending the new form details:
  setUsers([...users, formData]);
* State Reset: Flushes `formData` inputs back to empty values, clearing form fields.

### 4. Dynamic HTML Table Output
The active user database is rendered using standard HTML table structures:
* Header columns: Full Name, Email, and Age.
* Empty State Guard: If the user list is empty, a conditional check matches the table columns to output a single row telling users: "No users have been added yet."
* Row Iteration: Generates rows matching each object stored inside the `users` array.

## Running the Application

1. Open your terminal and navigate to the project directory:
   cd reactApp1
2. Install local node dependencies:
   npm install
3. Start the local server:
   npm start
   Open http://localhost:3000 in your browser to view the application.
