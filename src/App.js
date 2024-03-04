import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [newTaskName, setNewTaskName] = useState("");
  const [newTaskPrice, setNewTaskPrice] = useState("");
  const [newTaskImage, setNewTaskImage] = useState("");

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (
      newTask.trim() !== "" &&
      newTaskName.trim() !== "" &&
      newTaskPrice.trim() !== ""
    ) {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          text: newTask,
          name: newTaskName,
          price: newTaskPrice,
          image: newTaskImage,
        },
      ]);
      setNewTask("");
      setNewTaskName("");
      setNewTaskPrice("");
      setNewTaskImage("");
    }
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>TodoList</h1>
      <div className="inp">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Task Description"
        />
        <input
          type="text"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          placeholder="Task Name"
        />
        <input
          type="number"
          value={newTaskPrice}
          onChange={(e) => setNewTaskPrice(e.target.value)}
          placeholder="Task Price"
        />
        <input
          type="text"
          value={newTaskImage}
          onChange={(e) => setNewTaskImage(e.target.value)}
          placeholder="Task Image URL"
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="pes d">
        <p>№</p>
        <h3>img</h3>
        <h3>Name</h3>
        <p>Price</p>
        <h3>Delate</h3>
      </div>
      <ul>
        {tasks.map((task) => (
          <li className="app" key={task.id}>
            <div className="pes">
              <p>{task.text}</p>
              <img src={task.image} alt={task.name} />
              <h3>{task.name}</h3>
              <p>Price: {task.price}$</p>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
