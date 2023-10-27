import React, { useState, useEffect } from "react";

function ComponenteExemplo() {
  const [largura, setLargura] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setLargura(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <p>Largura da janela: {largura}</p>;
}

export default ComponenteExemplo;
