import React, { useState, useEffect } from "react";

function Temporizador() {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSegundos((segundosAnteriores) => segundosAnteriores + 1);
    }, 1000);

    return () => clearInterval(intervalId); // Função de limpeza
  }, []); // Array de dependências vazio significa que este efeito será executado uma vez

  return <div>Tempo: {segundos}s</div>;
}

export default Temporizador;
