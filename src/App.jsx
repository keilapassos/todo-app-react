import { useState } from "react";
import { Task } from "./components/Task";

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [resetInput, setResetInput] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const resetInputField = () => {
    setResetInput("");
  };

  const addTask = () => {
    const task = {
      // pegar ultimo item da lista e acrescentar 1:
      //  todoList[tamanhodalista - 1].id + 1
      // ternário para quando não tiver nenhum id na lista, o id será 1, senão
      // será o último id + 1
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };

    if (task.taskName != "") {
      setTodoList([...todoList, task]);
      setNewTask("");
    }
  };

  const deleteTask = (id) => {
    const newList = todoList.filter((task) => {
      return task.id != id;
    });

    setTodoList(newList);
  };

  const completeTask = (id) => {
    const completed = todoList.map((task) => {
      return task.id === id ? { ...task, completed: true } : task;
    });
    setTodoList(completed);
  };

  return (
    <div className="App">
      {/* area onde tem input e botão de adicionar tarefa */}
      <div className="addTask">
        <input
          placeholder="Add your task here"
          onChange={handleChange}
          value={newTask}
        />
        <button onClick={addTask}>➕ Add Task</button>
      </div>
      {/* area onde aparecerá as tarefas que foram adicionadas */}
      <div className="list">
        {todoList.map((task, index) => {
          return (
            <Task
              key={index}
              taskName={task.taskName}
              id={task.id}
              deleteTask={deleteTask}
              completeTask={completeTask}
              completed={task.completed}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
