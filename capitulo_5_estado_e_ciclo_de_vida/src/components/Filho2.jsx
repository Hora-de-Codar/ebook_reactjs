import { useState } from "react";

function Filho2({ enviarMensagemParaPai }) {
  const [mensagem, setMensagem] = useState("Olá do Filho!");

  return (
    <div>
      <p>{mensagem}</p>
      <button onClick={() => enviarMensagemParaPai(mensagem)}>
        Enviar para o Pai
      </button>
    </div>
  );
}

export default Filho2;
