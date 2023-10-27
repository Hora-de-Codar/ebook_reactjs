function Mensagem(props) {
  return (
    <div>
      <p>{props.texto}</p>
      <p>Contador: {props.contador}</p>
    </div>
  );
}

export default Mensagem;
