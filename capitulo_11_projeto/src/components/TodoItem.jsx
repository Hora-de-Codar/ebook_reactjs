function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className="TodoItem">
      <span
        style={{
          textDecoration: todo.isCompleted ? "line-through" : "none",
        }}
        onClick={onToggle}
      >
        {todo.text}
      </span>
      <button onClick={onDelete}>Deletar</button>
    </li>
  );
}

export default TodoItem;
