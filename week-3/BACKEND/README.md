# Backend Phase 1: Foundational Express API

Welcome to the **BACKEND** directory! This project represents the first phase of my backend development journey, where I built a foundational RESTful API using **Node.js** and **Express.js**. 

This version relies on **in-memory data management** (using JavaScript arrays) to handle Create, Read, Update, and Delete (CRUD) operations before advancing to a real database system.

---

## Tech Stack Used

- **Runtime Environment:** Node.js
- **Web Framework:** Express.js
- **Data Storage:** In-Memory (JavaScript Arrays & Objects)
- **Format:** JSON

---

## Project Structure

```text
BACKEND/
├── APIs/
│   ├── userAPI.js        # Express Router handling User CRUD operations
│   └── productAPI.js     # Express Router handling Product CRUD operations
├── server.js             # Main server entry point & middleware setup
├── req.http              # HTTP requests file for testing endpoints via VS Code REST Client
├── package.json          # Project dependencies
└── README.md             # This documentation!
```

---

## Key Features Implemented

This project focuses on the core mechanics of building a web server and processing HTTP requests. Here are the main concepts applied:

### 1. Modular Routing
Instead of writing all routes in a single massive file, I used `express.Router()` to separate concerns:
- **`/user-api`**: Sub-application responsible exclusively for User data.
- **`/product-api`**: Sub-application responsible exclusively for Product data.

### 2. Custom Middleware
I implemented basic middleware functions to intercept and process incoming HTTP requests before they reach their final route handlers. This included basic request logging and the built-in `express.json()` parser to handle JSON body payloads.

### 3. RESTful Endpoints
I constructed standard CRUD operations to manage data within local arrays:
- **`GET`** - Retrieve all items or a specific item by ID.
- **`POST`** - Add a new item to the array.
- **`PUT`** - Update an existing item's details.
- **`DELETE`** - Remove an item from the array.

### 4. Basic Error Handling
Implemented foundational error-handling mechanisms to catch invalid requests and prevent the server from crashing when unexpected input is provided.

---

## How to Run the Server

If you want to run this in-memory backend locally, follow these steps:

### 1. Prerequisites
- [Node.js](https://nodejs.org/) installed on your machine.

### 2. Setup Instructions

Navigate to this directory:
```bash
cd BACKEND
```

Install the required NPM packages:
```bash
npm install
```

### 3. Start the Server
```bash
node server.js
```
*You should see a console log indicating that the server is successfully running on port 3000.*

---

## Testing the Endpoints
To make testing easy, I have included a `req.http` file. If you have the **REST Client** extension installed in Visual Studio Code, you can open `req.http` and click the "Send Request" buttons above each endpoint to test the API directly from your editor!
