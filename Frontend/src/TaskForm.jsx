import { useState } from "react";
import { createTask } from "./api";

function TaskForm({ refresh }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    await createTask({ title, description });

    setTitle("");
    setDescription("");

    refresh();
  };

  return (
    <form onSubmit={submitHandler} className="task-form">

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
  );
}

export default TaskForm;