import PropTypes from "prop-types";

function Saudacao({ nome }) {
  return <h1>Olá, {nome}!</h1>;
}

Saudacao.propTypes = {
  nome: PropTypes.string.isRequired,
};

export default Saudacao;
