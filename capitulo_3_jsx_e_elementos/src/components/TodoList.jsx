function TodoList({ tasks }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.completed ? <strike>{task.text}</strike> : task.text}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
