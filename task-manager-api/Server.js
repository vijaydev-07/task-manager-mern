const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const taskRoutes = require("./Routes/taskRoutes");
const authRoutes = require("./Routes/authRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send(`
        <div style="font-family: sans-serif; text-align: center; padding: 50px;">
            <h1>🚀 Task Manager API</h1>
            <p>The backend is running successfully.</p>
            <div style="margin-top: 20px;">
                <code style="background: #eee; padding: 10px; border-radius: 5px; color: #d63384;">
                    /api/tasks
                </code>
            </div>
        </div>
    `);
});

// Route connections
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is live on port ${PORT}`);
});