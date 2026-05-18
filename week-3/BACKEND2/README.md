# Backend Phase 2: Database Integration (MongoDB & Mongoose)

Welcome to the **BACKEND2** directory! This project is a progression from the initial in-memory Express backend. Here, I have fully integrated a **MongoDB** database using the **Mongoose** Object Data Modeling (ODM) library to ensure our data is persistently stored and structurally validated.

---

## Tech Stack Used

- **Runtime Environment:** Node.js
- **Web Framework:** Express.js
- **Database:** MongoDB (NoSQL)
- **ODM (Object Data Modeling):** Mongoose
- **Environment Variables:** `dotenv`

---

## Project Structure

```text
BACKEND2/
├── APIs/
│   ├── UserAPI.js        # Express Router for User CRUD endpoints
│   └── ProductAPI.js     # Express Router for Product CRUD endpoints
├── models/
│   ├── User.js           # Mongoose Schema & Model for Users
│   └── Product.js        # Mongoose Schema & Model for Products (assumed)
├── server.js             # Main server entry point & DB connection setup
├── req.http              # HTTP requests file for testing endpoints via VS Code REST Client
├── package.json          # Project dependencies
└── README.md             # This documentation!
```

---

## Key Upgrades in Phase 2

Moving away from local JavaScript arrays to a real database brought several advanced concepts into this project:

### 1. Database Connection (`server.js`)
I used the `mongoose.connect()` method to asynchronously establish a connection to a MongoDB database. This allows the API to store, read, and manipulate persistent data.

### 2. Environment Variables (`dotenv`)
Security is important! I utilized the `dotenv` package to hide sensitive configuration details. The server port and MongoDB connection URL (`DB_URL`) are now loaded securely from a `.env` file instead of being hardcoded into the script.

### 3. Data Modeling (Mongoose Schemas)
Unlike the unstructured array data in the previous backend, I created explicit **Schemas** in the `models/` directory using Mongoose. This enforces:
- Data types (Strings, Numbers, Arrays)
- Required fields
- Default values (if necessary)

### 4. Advanced Error Handling
I implemented a robust, centralized error-handling middleware in `server.js` that catches global errors and specifically formats database-related issues:
- **`ValidationError`**: Returns a `400 Bad Request` if the client sends data that violates the Mongoose Schema rules.
- **`CastError`**: Returns a `400 Bad Request` if an invalid MongoDB `ObjectId` is provided in the URL parameters.
- **Default (500)**: A generic server error fallback.

---

## How to Run the Server

If you want to run this database-connected backend locally, follow these steps:

### 1. Prerequisites
- [Node.js](https://nodejs.org/) installed on your machine.
- A MongoDB database (either installed locally or a cloud cluster via MongoDB Atlas).

### 2. Setup Instructions

Navigate to this directory:
```bash
cd BACKEND2
```

Install the required NPM packages:
```bash
npm install
```

### 3. Configure Environment Variables
You **must** create a `.env` file in the root of the `BACKEND2` directory. Add the following variables (replace the URL with your actual MongoDB connection string):
```env
PORT=4000
DB_URL=mongodb://127.0.0.1:27017/my_database_name
```

### 4. Start the Server
```bash
node server.js
```
*You should see a console log indicating that the server is running on port 4000 and that the DB Connection was successful.*

---

## Testing the Endpoints
To make testing easy, I have included a `req.http` file. If you have the **REST Client** extension installed in Visual Studio Code, you can open `req.http` and click the "Send Request" buttons above each endpoint to test the API directly from your editor!