import React, { useState } from "react";

function Contador() {
  const [contagem, setContagem] = useState(0);

  return (
    <div>
      <h2>Contador: {contagem}</h2>
      <button onClick={() => setContagem(contagem + 1)}>Incrementar</button>
      <button onClick={() => setContagem(contagem - 1)}>Decrementar</button>
    </div>
  );
}

export default Contador;
