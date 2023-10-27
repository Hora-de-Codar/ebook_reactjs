import React, { useState, useEffect } from "react";

function useLarguraJanela() {
  const [largura, setLargura] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setLargura(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return largura;
}

function ComponenteExemplo2() {
  const largura = useLarguraJanela();
  return <p>Largura da janela: {largura}</p>;
}

export default ComponenteExemplo2;
