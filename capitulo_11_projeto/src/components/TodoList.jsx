import TodoItem from "./TodoItem";

function TodoList({ todos, toggleTodo, onDelete }) {
  return (
    <ul className="TodoList">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          onToggle={() => toggleTodo(index)}
          onDelete={() => onDelete(index)}
        />
      ))}
    </ul>
  );
}

export default TodoList;
