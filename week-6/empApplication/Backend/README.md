# Backend API Server (empApplication/Backend)

This is the server-side REST API of the Employee Management System. It is constructed using Node.js, Express, and Mongoose to connect to MongoDB, providing complete CRUD capabilities to manage employee databases.

## Technology Stack

* Node.js: Runtime environment.
* Express.js: Web application framework for routing and middleware.
* Mongoose: Object Data Modeling (ODM) library for schema definition and MongoDB query compilation.
* Cors: Cross-Origin Resource Sharing middleware to allow API access to the React frontend.
* Dotenv: Local environment configuration manager.
* Cookie-Parser: Middleware to parse cookies attached to client requests.

## Server Entry Point

The server initializes inside `server.js`. It sets up cross-origin permissions, registers parsing middlewares, defines root routes under `/api`, connects to MongoDB, and registers a unified central error handling middleware at the end of the request-response cycle.

## Employee Data Model Schema

The system implements the following schema rules via Mongoose:

| Field Name | Type | Required | Unique | Validation Constraint / Notes |
| :--- | :--- | :--- | :--- | :--- |
| name | String | Yes | No | Required field |
| email | String | Yes | Yes | Must be a unique email string |
| mobile | Number | Yes | No | Required field |
| designation | String | Yes | No | Required field |
| companyName | String | Yes | No | Required field |

* Timestamps: Model configuration automatically records `createdAt` and `updatedAt` values.
* Strict Mode: Schema is configured with `strict: "throw"` to reject any unmapped properties sent in body payloads.

## API Endpoints

The core endpoints are mapped to the router at `/api/emp`:

### 1. Create Employee
* Method: POST
* Path: `/api/emp`
* Request Body Format: JSON object containing all required fields.
* Response Codes:
  * 201 Created: Employee record successfully saved. Returns saved document.
  * 400 Bad Request: Missing required fields or schema validation failures.
  * 409 Conflict: Email address is already registered.
  * 500 Internal Server Error: Database or system error.

### 2. Read All Employees
* Method: GET
* Path: `/api/emp`
* Response Codes:
  * 200 OK: Returns array containing all employee records.
  * 500 Internal Server Error: Database or system error.

### 3. Update Employee
* Method: PUT
* Path: `/api/emp/:id`
* Parameter: `:id` must be a valid MongoDB ObjectId.
* Request Body Format: JSON object containing fields to modify.
* Response Codes:
  * 200 OK: Record successfully modified. Returns updated document.
  * 400 Bad Request: Invalid ID format (CastError) or invalid update fields.
  * 404 Not Found: No employee found with the matching database ID.
  * 500 Internal Server Error: Database or system error.

### 4. Delete Employee
* Method: DELETE
* Path: `/api/emp/:id`
* Parameter: `:id` must be a valid MongoDB ObjectId.
* Response Codes:
  * 200 OK: Record successfully deleted. Returns deleted document information.
  * 400 Bad Request: Invalid ID format (CastError).
  * 404 Not Found: No employee found with the matching database ID.
  * 500 Internal Server Error: Database or system error.

## Centralized Error Handling

The application has a robust, central error handling middleware in `server.js` to catch errors passed down via Express. It translates technical errors into structured JSON replies:
1. ValidationError: Returns status 400 with message "Validation failed".
2. CastError: Triggered by invalid ID formatting in request URLs. Returns status 400 with message "Invalid ID format".
3. Duplicate Key Error (Code 11000): Catches database conflicts when saving pre-existing emails. Returns status 409 specifying the conflicting field value.
4. Catch-All: Returns status 500 with "Server side error" for unhandled server issues.

## Local Configuration (.env)

Create a file named `.env` in the root of the Backend directory with the following variables:

PORT=4000
MONGODB_URI=mongodb://localhost:27017/mydb1
