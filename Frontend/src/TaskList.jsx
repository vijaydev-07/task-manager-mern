import { deleteTask, updateTask } from "./api";

function TaskList({ tasks, refresh }) {

  const handleDelete = async (id) => {
    await deleteTask(id);
    refresh();
  };

  const markComplete = async (id) => {
    await updateTask(id, { status: "completed" });
    refresh();
  };

  return (
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

          <div className="task-buttons">

            <button
              className="complete-btn"
              onClick={() => markComplete(task._id)}
              disabled={task.status === "completed"}
            >
              Complete
            </button>

            <button
              className="delete-btn"
              onClick={() => handleDelete(task._id)}
            >
              Delete
            </button>

          </div>

        </div>
      ))}

    </div>
  );
}

export default TaskList;