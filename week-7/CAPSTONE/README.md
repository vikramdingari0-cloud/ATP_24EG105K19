# MERN Blog Application 

## Overview

This project is a full-stack Blog Application developed using the MERN Stack — MongoDB, Express.js, React.js, and Node.js.

The application allows:
- Users to read articles and add comments
- Authors to create and manage blog posts
- Admins to manage users and platform activity

This project was developed to understand real-world full-stack web application development and API integration.

---

## Main Features

### Authentication
- User Registration
- User Login
- JWT Token Authentication
- Protected Routes

### User Features
- View all articles
- Read full article details
- Add comments to articles

### Author Features
- Create new articles
- Edit existing articles
- Activate or deactivate articles
- Manage personal blog posts

### Admin Features
- View all users
- Block or unblock users

---

## Technologies Used

### Frontend
- React.js
- Tailwind CSS
- Axios
- React Router DOM

### Backend
- Node.js
- Express.js
- JWT Authentication
- Bcrypt.js

### Database
- MongoDB
- Mongoose

---

## Project Structure

```bash
BLOG-APPLICATION
│
├── FRONTEND
│   ├── src
│   ├── components
│   ├── pages
│   ├── context
│   └── api
│
├── BACKEND
│   ├── APIs
│   ├── models
│   ├── middlewares
│   └── server.js
│
└── README.md
```

---

## How the Application Works

1. Users register and login into the application
2. Authors can create and publish articles
3. Users can read articles and post comments
4. Admin can manage all users from the dashboard
5. All data is stored in MongoDB database

---

## Installation Steps

### Backend Setup

```bash
cd BACKEND

npm install

node server.js
```

### Frontend Setup

```bash
cd FRONTEND

npm install

npm run dev
```

---

## Learning Outcomes

- Full-stack MERN development
- REST API creation
- Frontend and backend integration
- Authentication and authorization
- CRUD operations
- MongoDB database handling
- React routing and state management

---

## Conclusion

This MERN Blog Application demonstrates the development of a complete full-stack web application with authentication, article management, commenting system, and role-based dashboards.

The project helped in improving practical knowledge of frontend, backend, database integration, and API communication.

---

## Developed By

**DINGARI VIKRAM**  
B.Tech Engineering Student
