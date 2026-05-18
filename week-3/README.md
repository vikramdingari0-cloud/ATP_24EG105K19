# My Week 3 Progress: Backend Development & MongoDB

Hey everyone! Welcome to my **Week 3** progress repository. This week I dove deep into Backend Development, starting with basic API creation using **Express.js** and eventually advancing to full database integration using **MongoDB** and **Mongoose**. 

Here is a comprehensive breakdown of everything I learned and built!

---

##  Repository Structure

```text
week-3/
├── BACKEND/             # Express setup with In-Memory CRUD Operations
├── BACKEND2/            # Advanced Express setup with MongoDB & Mongoose
├── MongoDB_Queires.txt  # Raw MongoDB Query Practice & Assignments
└── README.md            # This documentation right here!
```

---

##  Phase 1: Basic Express Server (`BACKEND/`)

In the first phase of the week, I built a foundational backend system from scratch using **Node.js** and **Express.js (v5.2.1)**. This project focused on understanding HTTP requests, middlewares, and routing.

###  Key Features Implemented:
- **Modular Routing:** Used `express.Router()` to separate logic cleanly.
  - `/user-api` - Handled User CRUD operations.
  - `/product-api` - Handled Product CRUD operations.
- **Custom Middleware:** Intercepted and processed requests (e.g., logging) before reaching route handlers.
- **In-Memory Data Management:** Handled Create, Read, Update, and Delete operations using basic JavaScript arrays and objects.
- **JSON Parsing:** Integrated built-in `express.json()` middleware.

---

##  Phase 2: Database Integration (`BACKEND2/`)

For the second phase, I upgraded the backend by integrating it with a real database. I used **Mongoose (ODM)** to connect my Express API to a **MongoDB** database.

###  Key Upgrades Implemented:
- **Mongoose ODM:** Defined precise Schemas and Models (e.g., `models/` directory) to give our NoSQL database a structured format.
- **MongoDB Connection:** Used `mongoose.connect()` asynchronously to establish a secure database connection.
- **Environment Variables (`dotenv`):** Protected sensitive information (like my MongoDB URI and Port numbers) using a `.env` file.
- **Global Error Handling:** Created a centralized error-handling middleware that catches and properly formats:
  - `ValidationError` - When data doesn't match the Mongoose Schema.
  - `CastError` - When invalid MongoDB ObjectIds are provided in the URL.
  - Default server errors (500).

---

##  Phase 3: Mastering Database Commands (`MongoDB_Queires.txt`)

Aside from Express and Mongoose, I also practiced running raw **MongoDB** queries to understand how NoSQL database operations work under the hood! 

I completed a hands-on assignment managing an `employees` collection. Here is what I practiced:

- **Inserting Data:** Used `db.collection.insertMany()` to create employee records with embedded documents (like nested `experiences` arrays).
- **Filtering & Querying:** Practiced searching for specific employees (e.g., finding employees with the "React" skill).
- **Array Operators:** 
  - `$push`: Added new skills to arrays.
  - `$pop`: Removed the most recent/first experience from an array.
- **Updating Documents:** Used `$set` to add new fields (like an `address`) to existing employee documents.

---

##  How to Run the Servers

If you want to test my backend locally, follow these steps:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed!

### Running `BACKEND` (In-Memory)
1. Navigate into the directory: `cd BACKEND`
2. Install dependencies: `npm install`
3. Run the server: `node server.js`
4. The server runs on `http://localhost:3000`.

### Running `BACKEND2` (MongoDB)
1. Navigate into the directory: `cd BACKEND2`
2. Install dependencies: `npm install`
3. **Important:** Create a `.env` file in the `BACKEND2` folder with your `PORT` and `DB_URL` (MongoDB Connection String).
4. Run the server: `node server.js`
5. The server runs on `http://localhost:4000` (or whatever port you define).

*(Both directories contain a `req.http` file that you can use with the VS Code REST Client extension to test all endpoints!)*

---

##  Summary of What I Learned

By the end of Week 3, I am proud to say I successfully learned:
-  How to build RESTful APIs from scratch using Node/Express.
-  How to organize complex backend code using Routers and MVC-like structures.
-  How to connect an Express server to a MongoDB database.
-  How to define Mongoose Schemas and handle database validation.
-  How to write complex raw MongoDB queries for data manipulation.

