import React from "react";

export const TodoListItem = ({ todo, i, handleDelete, handleToggle }) => {
  return (
    <li key={todo.id} className="list-group-item d-flex justify-content-between">
      <p
        onClick={() => handleToggle(todo.id)}
        className={`${todo.done && "complete"}`}
      >
        {i + 1}. {todo.desc}
      </p>
      <button className="btn btn-danger" onClick={() => handleDelete(todo.id)}>
        Delete
      </button>
    </li>
  );
};
