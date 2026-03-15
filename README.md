# Task Manager API (Node.js, Express, MongoDB)

A RESTful Task Manager API built using **Node.js, Express.js, and MongoDB**.  
This project demonstrates secure **CRUD operations** for managing tasks with authentication and role-based permissions.

---

## 🌐 Live API Endpoint

You can test this API live using the base URL below:

**Base URL**

```
https://task-manager-backend-y38o.onrender.com
```

---

# Features

- User Registration & Login (JWT Authentication)
- Role-Based Access Control (Admin vs User)
- Password hashing using bcrypt
- Create and manage tasks
- Update task status
- Delete tasks (Admin only)
- Protected routes using middleware
- RESTful API architecture
- MongoDB database integration

---

# Tech Stack

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

## Authentication & Security

- JSON Web Token (JWT)
- bcrypt (Password Hashing)
- Role-based Authorization (RBAC)

## Tools

- Git
- GitHub
- Thunder Client / Postman

---

# Project Structure

```
task-manager-api/
│
├── config/
│   └── db.js                # MongoDB database connection
│
├── Controllers/
│   ├── authControllers.js  # Authentication logic
│   └── taskControllers.js  # Task CRUD operations
│
├── Models/
│   ├── User.js             # User schema with roles
│   └── Task.js             # Task schema
│
├── Routes/
│   ├── authRoutes.js       # Authentication routes
│   └── taskRoutes.js       # Task routes
│
├── middleware/
│   ├── authMiddleware.js   # JWT verification
│   └── roleMiddleware.js   # Role-based access control
│
├── .env                    # Environment variables
├── package.json            # Dependencies and scripts
└── Server.js               # Main server entry point
```

---

# Installation

### 1️⃣ Clone the repository

```
git clone https://github.com/vijaydev-07/task-manager-api.git
```

### 2️⃣ Go to project folder

```
cd task-manager-api
```

### 3️⃣ Install dependencies

```
npm install
```

### 4️⃣ Create `.env` file

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 5️⃣ Start server

```
npm start
```

---

# API Endpoints

## Authentication

POST `/api/auth/register`  
Register a new user

POST `/api/auth/login`  
Login user and return JWT token

---

## Tasks (Protected Routes)

GET `/api/tasks`  
Get all tasks

POST `/api/tasks`  
Create a new task

PUT `/api/tasks/:id`  
Update a task

DELETE `/api/tasks/:id`  
Delete a task (Admin only)

---

# Testing the API

1. Register/Login to get JWT token  
2. Use **Bearer Token** in Postman or Thunder Client  
3. Only users with `role: "admin"` can delete tasks

---

# Author

**Vijay Dinanath Harijan**