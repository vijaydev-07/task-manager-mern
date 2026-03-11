import { useState, useEffect } from "react";
import axios from "axios";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import "./App.css";

function App() {

  const [tasks, setTasks] = useState([]);

  const API = "https://task-manager-3i9u.onrender.com/api/tasks";

  const fetchTasks = async () => {
    try {
      const res = await axios.get(API);
      setTasks(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="container">

      <h1>Task Manager</h1>

      <TaskForm refresh={fetchTasks} />

      <TaskList tasks={tasks} refresh={fetchTasks} />

    </div>
  );
}

export default App;