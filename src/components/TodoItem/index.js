import React from "react";

const ToDoItem = ({ el, onDelete }) => {
  const handleDelete = () => {
    onDelete(el.id);
  };

  return (
    <tr>
      <th scope="row">{el.id}</th>
      <td>{el.product}</td>
      <td>{el.price}</td>
      <td>
        <button onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
};

export default ToDoItem;
