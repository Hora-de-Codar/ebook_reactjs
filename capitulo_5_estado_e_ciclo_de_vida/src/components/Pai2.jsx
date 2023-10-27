import Filho2 from "./Filho2";

function Pai2() {
  const receberMensagemDoFilho = (mensagem) => {
    console.log("Mensagem recebida do filho:", mensagem);
  };

  return <Filho2 enviarMensagemParaPai={receberMensagemDoFilho} />;
}

export default Pai2;
