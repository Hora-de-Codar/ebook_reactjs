import React, { useState } from "react";

function Contador() {
  const [contagem, setContagem] = useState(0);

  const incrementar = () => {
    setContagem(contagem + 1);
  };

  return (
    <div>
      <p>Contagem: {contagem}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}

export default Contador;
