const Task = require("../Models/Task");

// Get all tasks
exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({
            message: "Error fetching tasks",
            error
        });
    }
};

// Create a task
exports.createTask = async (req, res) => {
    try {
        const {
            title,
            description
        } = req.body;
        const task = new Task({
            title,
            description
        });
        const savedTask = await task.save();
        res.status(201).json(savedTask);
    } catch (error) {
        res.status(400).json({
            message: "Error creating task",
            error
        });
    }
};

// Update a task
exports.updateTask = async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            req.body, {
                new: true
            }
        );
        res.json(updatedTask);
    } catch (error) {
        res.status(400).json({
            message: "Error updating task",
            error
        });
    }
};

// Delete a task
exports.deleteTask = async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.json({
            message: "Task deleted successfully"
        });
    } catch (error) {
        res.status(400).json({
            message: "Error deleting task",
            error
        });
    }
};