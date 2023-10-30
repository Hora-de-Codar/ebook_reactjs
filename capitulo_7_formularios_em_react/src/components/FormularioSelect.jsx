import React, { useState } from "react";

function FormularioSelect() {
  const [opcaoSelecionada, setOpcaoSelecionada] = useState("opcao1");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(opcaoSelecionada);
  };

  return (
    <form onSubmit={handleSubmit}>
      <select
        value={opcaoSelecionada}
        onChange={(e) => setOpcaoSelecionada(e.target.value)}
      >
        <option value="opcao1">Opção 1</option>
        <option value="opcao2">Opção 2</option>
        <option value="opcao3">Opção 3</option>
      </select>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default FormularioSelect;
