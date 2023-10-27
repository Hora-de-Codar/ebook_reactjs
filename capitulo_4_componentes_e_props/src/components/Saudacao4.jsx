function Saudacao4(props) {
  const { nome } = props;
  const mensagem = `Olá, ${nome}!`;

  return <h1>{mensagem}</h1>;
}

export default Saudacao4;
