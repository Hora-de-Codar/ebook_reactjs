function Saudacao2({ nome }) {
  return <h1>Olá, {nome}!</h1>;
}

Saudacao2.defaultProps = {
  nome: "Visitante",
};

export default Saudacao2;
