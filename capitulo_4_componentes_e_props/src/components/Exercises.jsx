import PropTypes from "prop-types";

function BemVindo({ nome }) {
  return <h1>Bem-vindo, {nome}!</h1>;
}

// Exercício 1: Criando e Renderizando Componentes
// Descomente para ver o exercício 1 em ação
// BemVindo.propTypes = {};

// Exercício 2: Validando Props com PropTypes
// Descomente para ver o exercício 2 em ação
// BemVindo.propTypes = {
//   nome: PropTypes.string.isRequired,
// };

// Exercício 3: Usando o Operador de Desconstrução em Props
// Descomente para ver o exercício 3 em ação
// (Neste caso, a desconstrução já está sendo feita)

// Exercício 4: Trabalhando com Valores Default para Props
BemVindo.propTypes = {
  nome: PropTypes.string,
};

BemVindo.defaultProps = {
  nome: "Visitante",
};

function Exercises() {
  return (
    <div>
      <BemVindo />
      {/* <BemVindo nome="João" /> */}
    </div>
  );
}

export default Exercises;
