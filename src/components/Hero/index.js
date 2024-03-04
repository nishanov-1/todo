import React, { useState, useEffect } from "react";
import ToDoItem from "../TodoItem";
import { MdFormatListNumbered } from "react-icons/md";

const Hero = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  function addTask() {
    let obj = {
      id: 1,
      product: value,
    };
    let task = JSON.parse(localStorage.getItem("todo")) || [];
    task.push(obj);
    localStorage.setItem("todo", JSON.stringify(task));
    readItem();
  }
  function readItem() {
    let task = JSON.parse(localStorage.getItem("todo")) || [];
    setData(task);
  }
  useEffect(() => {
    readItem();
  }, []);

  return (
    <div id="hero">
      <div className="container">
        <h1>TO DO LIST</h1>
        <div className="hero">
          <input type="text" placeholder="Photo url..." />
          <input
            type="text"
            onChange={(e) => setValue(e.target.value)}
            placeholder="Product Name"
          />
          <input type="text" placeholder="Price" />
          <button onClick={addTask}>Buy</button>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">
                <MdFormatListNumbered />
              </th>
              <th scope="col">Product Name:</th>
              <th scope="col">Price</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((el) => (
              <ToDoItem key={el.id} el={el} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Hero;
