import React from "react";

function TodoItem({ text, onDelete }) {
  return (
    <li className="TodoItem">
      <span>{text}</span>
      <button onClick={onDelete}>Excluir</button>
    </li>
  );
}

export default TodoItem;
