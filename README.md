# Task Manager API (Node.js, Express, MongoDB)

A RESTful Task Manager API built using **Node.js, Express.js, and MongoDB**.
This project demonstrates basic **CRUD (Create, Read, Update, Delete)** operations for managing tasks.

The API allows users to create tasks, retrieve all tasks, update task status, and delete tasks. It follows a clean backend architecture with separate folders for configuration, models, and routes.

---

## Features

• Create new tasks
• Get all tasks
• Update task status (mark task as completed)
• Delete tasks
• RESTful API architecture
• MongoDB database integration
• Clean and scalable backend structure

---

## Tech Stack

### Backend

• Node.js
• Express.js
• MongoDB
• Mongoose

### Tools

• Git
• GitHub
• Thunder Client / Postman (API testing)

---

## Project Structure

```
task-manager-api
│
├── config
│   └── db.js                     # MongoDB database connection
│
├── Controllers
│   └── taskControllers.js        # Business logic for task CRUD operations
│
├── Models
│   └── Task.js                   # Mongoose schema for tasks
│
├── Routes
│   └── taskRoutes.js             # API routes for tasks
│
├── node_modules                  # Installed project dependencies
│
├── .env                          # Environment variables (not committed to Git)
├── .gitignore                    # Specifies files and folders Git should ignore
│
├── package.json                  # Project dependencies and scripts
├── package-lock.json             # Dependency lock file
│
├── Server.js                     # Main server entry point
└── README.md                     # Project documentation
```

---

## Installation

Clone the repository

```
git clone https://github.com/vijaydev-07/task-manager-api.git
```

Go to the project folder

```
cd task-manager-api
```

Install dependencies

```
npm install
```

Create a `.env` file

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Start the server

```
npm start
```

The server will run on

```
http://localhost:5000
```

---

## API Endpoints

Create Task

```
POST /api/tasks
```

Get All Tasks

```
GET /api/tasks
```

Update Task

```
PUT /api/tasks/:id
```

Delete Task

```
DELETE /api/tasks/:id
```

---

## Testing the API

You can test the API using:

• Thunder Client (VS Code extension)
• Postman

These tools allow you to send HTTP requests and verify CRUD operations.

---

## Author

Vijay Dinanath Harijan
