import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, onDelete }) {
  return (
    <ul className="TodoList">
      {todos.map((todo, index) => (
        <TodoItem key={index} text={todo} onDelete={() => onDelete(index)} />
      ))}
    </ul>
  );
}

export default TodoList;
