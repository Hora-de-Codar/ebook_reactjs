import React, { useReducer } from "react";

function reducer(estado, acao) {
  switch (acao.tipo) {
    case "incrementar":
      return { contagem: estado.contagem + 1 };
    case "decrementar":
      return { contagem: estado.contagem - 1 };
    default:
      throw new Error();
  }
}

function ContadorComReducer() {
  const [estado, dispatch] = useReducer(reducer, { contagem: 0 });

  return (
    <div>
      <h2>Contador: {estado.contagem}</h2>
      <button onClick={() => dispatch({ tipo: "incrementar" })}>
        Incrementar
      </button>
      <button onClick={() => dispatch({ tipo: "decrementar" })}>
        Decrementar
      </button>
    </div>
  );
}

export default ContadorComReducer;
