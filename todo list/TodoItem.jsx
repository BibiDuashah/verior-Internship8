import React from "react";

const TodoItem = ({ todo, onDelete }) => {
  return (
    <li className="todo-item">
      <span>{todo.text}</span>
      <button className="delete-btn" onClick={() => onDelete(todo.id)}>
        ❌
      </button>
    </li>
  );
};

export default TodoItem;
