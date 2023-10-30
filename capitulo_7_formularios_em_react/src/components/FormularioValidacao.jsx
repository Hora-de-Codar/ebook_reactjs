import React, { useState } from "react";

function FormularioValidacao() {
  const [inputValue, setInputValue] = useState("");
  const [erro, setErro] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() === "") {
      setErro("O campo não pode ser vazio");
    } else {
      setErro("");
      console.log(inputValue);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {erro && <p className="error-message">{erro}</p>}
      <button type="submit">Enviar</button>
    </form>
  );
}

export default FormularioValidacao;
