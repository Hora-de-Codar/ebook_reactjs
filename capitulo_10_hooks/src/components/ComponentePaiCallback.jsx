import React, { useState, useCallback } from "react";

function ComponenteFilho({ acao }) {
  console.log("Componente Filho renderizado!");
  return <button onClick={acao}>Clique aqui</button>;
}

function ComponentePaiCallback() {
  const [contador, setContador] = useState(0);

  const acao = useCallback(() => {
    setContador((c) => c + 1);
  }, []);

  return (
    <div>
      <h2>Contador: {contador}</h2>
      <ComponenteFilho acao={acao} />
    </div>
  );
}

export default ComponentePaiCallback;
