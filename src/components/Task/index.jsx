import "./styles.css";

export const Task = (props) => {
  return (
    <div className={props.completed ? "completedTask" : "task"}>
      <h3>{props.taskName}</h3>
      <div className="buttons">
        <button onClick={() => props.deleteTask(props.id)}>✖️</button>
        <button onClick={() => props.completeTask(props.id)}>✅</button>
      </div>
    </div>
  );
};
