const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

const {
    getTasks,
    createTask,
    updateTask,
    deleteTask
} = require("../Controllers/taskControllers");

// Basic CRUD routes
router.get("/", authMiddleware, getTasks);
router.post("/", authMiddleware, createTask);
router.put("/:id", authMiddleware, updateTask);

// Restricted: Only admins can remove tasks
router.delete("/:id", authMiddleware, roleMiddleware("admin"), deleteTask);

module.exports = router;