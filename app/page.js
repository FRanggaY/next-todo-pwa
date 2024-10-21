"use client";
import { useState } from 'react';

export default function Home() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>To-Do List PWA</h1>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
          style={{ padding: '10px', width: '80%' }}
        />
        <button onClick={addTask} style={{ padding: '10px', marginLeft: '10px' }}>
          Add
        </button>
      </div>
      <ul>
        {tasks.map((t, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            {t}{' '}
            <button onClick={() => deleteTask(index)} style={{ marginLeft: '10px' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
