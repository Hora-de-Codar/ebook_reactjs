import React from "react";
import { useParams } from "react-router-dom";

function Exercicio3() {
  const { id } = useParams();
  return (
    <div>
      <h1>Exercício 3: Parâmetros nas Rotas</h1>
      <p>ID do Produto: {id}</p>
    </div>
  );
}

export default Exercicio3;
