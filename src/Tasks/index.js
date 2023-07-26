import "./style.css";
import App from "../App";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <ul className="list">
    {tasks.map((task) => (
      <li
        key={task.id}
        className={`list__element
            ${hideDone && task.done ? " list__element--hidden" : ""}`}
      >
        <button className="js-done list__button"
        onClick={() => toggleTaskDone(task.id)}
        >{task.done ? "✓" : ""}</button>
        <span
          className={`list__item
                ${task.done ? " list__item--done" : ""}`}
        >
          {task.content}
        </span>
        <button className="js-remove list__button list__button--remove"
        onClick={() => removeTask(task.id)}
        >
          🗑
        </button>
      </li>
    ))}
  </ul>
);

export default Tasks;