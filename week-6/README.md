# Week 6: Full-Stack & Advanced React Projects

## Project Purpose
The primary goal of this week was to master the **MERN Stack** (MongoDB, Express, React, Node.js) by building a real-world application. The project transitioned from simple React components to a robust, full-stack **Employee Management System** capable of handling dynamic data, API communication, and state management.

---

##  EmpApp (Full-Stack Employee Management)
This is the flagship project of the week, designed to manage employee databases efficiently.

###  Frameworks & Libraries
- **Backend**: Express.js (Node.js Framework)
- **Frontend**: React (UI Library), Vite (Build Tool)
- **Database**: MongoDB with Mongoose (ODM)
- **Styling**: Tailwind CSS

###  Key Modules & Imports
- **Backend (`server.js`)**:
  - `express`: Core framework for routing and middleware.
  - `mongoose`: For schema-based data modeling and DB connection.
  - `cors`: To enable cross-origin requests from the frontend.
  - `dotenv`: For managing sensitive environment variables.
- **Frontend (`App.jsx`)**:
  - `useState`, `useEffect`: React hooks for state and lifecycle management.
  - `fetch`: Standard API for making network requests to the backend.

---

##  ReactApp
A focused project aimed at mastering React internals and responsive design.

###  Frameworks
- React, Tailwind CSS

###  Key Modules
- **React Hooks**: Deep dive into state management.
- **Tailwind Config**: Customization of theme and utility classes.

---

##  ReactApp2 (Multi-Page Architecture)
An advanced UI project demonstrating how to structure large-scale applications with multiple views.

###  Frameworks
- React, Tailwind CSS

###  Key Components & Imports
- **Layouts**: `RootLayout` for consistent header/footer across pages.
- **Pages**: Modular imports for `Home.jsx`, `Users.jsx`, `Java.jsx`, and `Vue.jsx`.
- **UI Components**: `Header`, `Navbar`, and `Footer`.

---

##  Getting Started

### Backend
1. `cd empApp/Backend`
2. `npm install`
3. `node server.js`

### Frontend
1. `cd empApp/Frontend`
2. `npm install`
3. `npm run dev`

---
*Developed with focus on clean code and scalable architecture.*
