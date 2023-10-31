import React, { useState } from "react";

function TodoInput({ onAdd }) {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleClick = () => {
    if (text.trim()) {
      onAdd(text);
      setText("");
    }
  };

  return (
    <div className="TodoInput">
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleClick}>Adicionar</button>
    </div>
  );
}

export default TodoInput;
