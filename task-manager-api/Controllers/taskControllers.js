const Task = require("../Models/Task");

exports.getTasks = async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
};

exports.createTask = async (req, res) => {
    const {
        title,
        description
    } = req.body;

    const task = new Task({
        title,
        description
    });

    const savedTask = await task.save();
    res.json(savedTask);
};

exports.updateTask = async (req, res) => {
    const updatedTask = await Task.findByIdAndUpdate(
        req.params.id,
        req.body, {
            new: true
        }
    );

    res.json(updatedTask);
};

exports.deleteTask = async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json({
        message: "Task deleted"
    });
};