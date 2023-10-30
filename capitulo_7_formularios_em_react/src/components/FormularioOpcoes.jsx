import React, { useState } from "react";

function FormularioOpcoes() {
  const [aceitaTermos, setAceitaTermos] = useState(false);
  const [cor, setCor] = useState("vermelho");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Termos aceitos: ${aceitaTermos}, Cor selecionada: ${cor}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Aceita os termos?
        <input
          type="checkbox"
          checked={aceitaTermos}
          onChange={() => setAceitaTermos(!aceitaTermos)}
        />
      </label>
      <div>
        Escolha sua cor:
        <label>
          Vermelho
          <input
            type="radio"
            value="vermelho"
            checked={cor === "vermelho"}
            onChange={(e) => setCor(e.target.value)}
          />
        </label>
        <label>
          Azul
          <input
            type="radio"
            value="azul"
            checked={cor === "azul"}
            onChange={(e) => setCor(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default FormularioOpcoes;
