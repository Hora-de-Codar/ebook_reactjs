import React, { useState } from "react";

function Alternador() {
  const [texto, setTexto] = useState("Texto A");

  const alternarTexto = () => {
    setTexto((textoAnterior) =>
      textoAnterior === "Texto A" ? "Texto B" : "Texto A"
    );
  };

  return (
    <div>
      <p>{texto}</p>
      <button onClick={alternarTexto}>Alternar Texto</button>
    </div>
  );
}

export default Alternador;
