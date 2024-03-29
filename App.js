import React, { useState } from "react";
import "./styles.css";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTask = () => {
    if (inputValue.trim() !== "") {
      setTasks([...tasks, inputValue.trim()]);
      setInputValue("");
    }
  };

  const removeTask = (taskIndex) => {
    setTasks(tasks.filter((_, index) => index !== taskIndex));
  };

  return (
    <div className="todo-list">
      <h2>To-do List</h2>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="todo-input"
          placeholder="Enter a task"
        />
        <button onClick={addTask} className="add-button">
          ➕
        </button>
      </div>
      <ul className="todo-items">
        {tasks.map((task, index) => (
          <li key={index} className="todo-item">
            {task}
            <button onClick={() => removeTask(index)} className="remove-button">
              ➖
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;