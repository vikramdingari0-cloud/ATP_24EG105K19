# Week-3: Backend Development with Express.js 

Welcome to the **Week-3** progress repository for Backend Development. This project demonstrates the core concepts of building a RESTful API using **Node.js** and **Express.js**.

---

##  Overview

This application serves as a foundational backend system, showcasing how to handle HTTP requests, implement custom middleware, and organize routes using Express Routers.

###  Tech Stack
- **Runtime:** Node.js
- **Framework:** Express.js (v5.2.1)
- **Format:** JSON (REST API)

---

##  Project Structure

```text
BACKEND/
├── APIs/
│   ├── userAPI.js      # User management routes (CRUD)
│   └── productAPI.js   # Product management routes (CRUD)
├── server.js           # Main entry point & server configuration
├── req.http            # HTTP request testing file
├── package.json        # Dependencies and metadata
└── README.md           # Project documentation
```

---

##  Key Features

### 1. **Modular Routing**
The project uses `exp.Router()` to separate logic into distinct modules:
- `/user-api`: Handles all user-related operations.
- `/product-api`: Handles all product-related operations.

### 2. **Custom Middleware**
Includes implementation of custom middleware to process requests before they reach the route handlers (e.g., logging, request transformation).

### 3. **RESTful Endpoints**
Full CRUD (Create, Read, Update, Delete) support for both Users and Products:
- `GET /users` - Fetch all users
- `POST /users` - Create a new user
- `PUT /users/:id` - Update user details
- `DELETE /users/:id` - Remove a user

---

##  Getting Started

### Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation
1. Clone the repository.
2. Navigate to the `BACKEND` directory.
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Server
Start the development server on port `3000`:
```bash
node server.js
```

The server will be available at `http://localhost:3000`.

---

##  Testing APIs
You can use the provided `req.http` file with the **REST Client** extension in VS Code to test the endpoints directly.

---

###  Summary
By the end of this week, I have successfully implemented:
- ✅ Basic Express server setup.
- ✅ JSON body parsing middleware.
- ✅ Routing and sub-applications.
- ✅ In-memory data management for CRUD operations.
- ✅ Error handling and middleware patterns.

---
