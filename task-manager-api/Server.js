const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const taskRoutes = require("./Routes/taskRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send(`
        <div style="font-family: Arial, sans-serif; text-align: center; padding: 50px;">
            <h1>Task Manager API</h1>
            <p style="font-size: 1.2rem;">To perform CRUD operations, please use the following endpoint:</p>
            <div style="margin: 20px 0;">
                <code style="background: #f4f4f4; padding: 12px 20px; border-radius: 8px; font-size: 1.1rem; border: 1px solid #ddd; color: #d63384; display: inline-block;">
                    https://task-manager-backend-y38o.onrender.com/api/tasks
                </code>
            </div>
        </div>
    `);
});

app.use("/api/tasks", taskRoutes);

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on port ${PORT}`);
});