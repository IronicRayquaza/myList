import React, { useState } from 'react';
import './App.css'; // Import the CSS file for styling

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() === '') return;
    setTasks([...tasks, newTask]);
    setNewTask('');
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>To-Do List</h1>
      </header>

      <section className="todo-section">
        <div className="input-container">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter a new task"
          />
          <button onClick={handleAddTask}>Add Task</button>
        </div>

        <ul className="todo-list">
          {tasks.map((task, index) => (
            <li key={index} className="todo-item">
              {task}
              <button onClick={() => handleDeleteTask(index)} className="delete-button">
                Delete
              </button>
            </li>
          ))}
        </ul>
      </section>

      <footer className="footer">
        <p>&copy; 2024 To-Do List. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;

