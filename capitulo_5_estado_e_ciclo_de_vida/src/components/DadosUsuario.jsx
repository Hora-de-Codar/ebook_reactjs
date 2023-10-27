import React, { useState, useEffect } from "react";

function DadosUsuario({ userId }) {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    fetch(`/api/usuarios/${userId}`)
      .then((response) => response.json())
      .then((data) => setUsuario(data));
  }, [userId]);

  if (!usuario) {
    return "Carregando...";
  }

  return <div>{usuario.nome}</div>;
}

export default DadosUsuario;
