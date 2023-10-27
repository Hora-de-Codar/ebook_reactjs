import React from "react";

function MeuComponente() {
  const handleClick = (evento) => {
    console.log("O botão foi clicado!", evento);
  };

  return <button onClick={handleClick}>Clique em mim</button>;
}

export default MeuComponente;
