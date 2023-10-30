import React, { useState, useMemo } from "react";

function ComponenteCaro({ numero }) {
  const calculoCaro = (num) => {
    console.log("Cálculo caro sendo executado...");
    return num * 2;
  };

  const resultado = useMemo(() => calculoCaro(numero), [numero]);

  return <h2>Resultado: {resultado}</h2>;
}

function AppUseMemo() {
  const [numero, setNumero] = useState(0);
  const [contador, setContador] = useState(0);

  return (
    <div>
      <input
        type="number"
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
      />
      <ComponenteCaro numero={numero} />
      <button onClick={() => setContador(contador + 1)}>
        Incrementar Contador
      </button>
      <h2>Contador: {contador}</h2>
    </div>
  );
}

export default AppUseMemo;
