import React, { useContext } from "react";

const TemaContext = React.createContext();

function ComponenteFilho() {
  const tema = useContext(TemaContext);
  return <h2 style={{ color: tema.cor }}>Texto com o tema atual</h2>;
}

function ComponentePai() {
  const tema = { cor: "blue" };

  return (
    <TemaContext.Provider value={tema}>
      <ComponenteFilho />
    </TemaContext.Provider>
  );
}

export default ComponentePai;
