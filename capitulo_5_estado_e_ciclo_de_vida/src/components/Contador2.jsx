import React, { useState, useEffect } from "react";

function Contador2() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    document.title = `Contador: ${contador}`;
  }, [contador]);

  const incrementar = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <p>{contador}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}

export default Contador2;
