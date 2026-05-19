# Employee Management System (empApplication)

This directory contains the Employee Management System, a full-stack MERN application designed to manage employee directories. It is split into two separate directories: one for the Express backend API and one for the React frontend client.

## Directory Structure

* Backend: Express, Node.js, and Mongoose connection to MongoDB.
* Frontend: React client built using Vite, Tailwind CSS, and React Router.

## Project Scope

The application handles standard CRUD operations (Create, Read, Update, Delete) to maintain employee records. Each employee record contains the following details:
* Full Name
* Email Address (Unique)
* Mobile Number
* Job Designation
* Company Name

## Architecture Overview

The system is split to decouple data operations from client presentation:

1. Express Server (Backend): Handles incoming REST client requests, connects to MongoDB to validate and commit changes, and returns appropriate JSON payloads and standard HTTP response status codes.
2. React Client (Frontend): Provides a structured, responsive single-page experience. It maps routes dynamically to handle adding, editing, listing, and viewing individual employee details, sending fetch requests to the Express server.

## Getting Started

### 1. Database Connection
Ensure you have MongoDB running locally on your computer at:
mongodb://localhost:27017/mydb1
Or configure a remote connection string inside the backend environment file.

### 2. Running the Backend
1. Open your terminal and navigate to the Backend folder:
   cd Backend
2. Install dependencies:
   npm install
3. Configure the environment by creating a `.env` file (see the Backend directory for instructions).
4. Launch the Express server:
   node server.js
   The server runs on port 4000 by default.

### 3. Running the Frontend
1. Open a separate terminal and navigate to the Frontend folder:
   cd Frontend
2. Install dependencies:
   npm install
3. Start the Vite development server:
   npm run dev
   The application will be accessible in your web browser (typically at http://localhost:5173).
