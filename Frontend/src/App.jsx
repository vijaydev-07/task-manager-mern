import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {

  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const API = "https://task-manager-3i9u.onrender.com/api/tasks";

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await axios.get(API);
    setTasks(res.data);
  };

  const addTask = async (e) => {
    e.preventDefault();

    await axios.post(API, { title, description });

    setTitle("");
    setDescription("");

    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchTasks();
  };

  const completeTask = async (task) => {
    await axios.put(`${API}/${task._id}`, {
      ...task,
      status: "completed",
    });

    fetchTasks();
  };

  return (
    <div className="container">

      <h1>Task Manager</h1>

      <form onSubmit={addTask} className="task-form">

        <input
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Task description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <button type="submit">Add Task</button>

      </form>

      <div className="task-list">

        {tasks.map((task) => (
          <div className="task-card" key={task._id}>

  <div className="task-info">
    <h3>{task.title}</h3>
    <p>{task.description}</p>

    <span className={task.status === "completed" ? "done" : "pending"}>
      {task.status}
    </span>
  </div>

  <div className="buttons">

    <button
      className="complete"
      onClick={() => completeTask(task)}
    >
      Complete
    </button>

    <button
      className="delete"
      onClick={() => deleteTask(task._id)}
    >
      Delete
    </button>

  </div>

</div>
        ))}

      </div>
    </div>
  );
}

export default App;