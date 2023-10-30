import React, { useState } from "react";

function FormularioSelecao() {
  const [fruta, setFruta] = useState("maçã");

  const handleChange = (e) => {
    setFruta(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Fruta selecionada: " + fruta);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Escolha sua fruta:
        <select value={fruta} onChange={handleChange}>
          <option value="maçã">Maçã</option>
          <option value="banana">Banana</option>
          <option value="uva">Uva</option>
        </select>
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default FormularioSelecao;
