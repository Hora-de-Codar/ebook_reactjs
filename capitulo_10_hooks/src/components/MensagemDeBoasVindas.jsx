import React, { useEffect, useState } from "react";

function MensagemDeBoasVindas() {
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    setMensagem("Bem-vindo ao nosso site!");
  }, []);

  return <h2>{mensagem}</h2>;
}

export default MensagemDeBoasVindas;
