import React, { useState } from "react";

function Dobrador() {
  const [numero, setNumero] = useState(1);

  const dobrar = () => {
    setNumero((numeroAnterior) => numeroAnterior * 2);
  };

  return (
    <div>
      <p>Número: {numero}</p>
      <button onClick={dobrar}>Dobrar</button>
    </div>
  );
}

export default Dobrador;
