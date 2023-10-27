import "./App.css";
import Welcome from "./components/Welcome";
import Welcome2 from "./components/Welcome2";
import { ComponenteA, ComponenteB } from "./components/ExportacaoNomeada";
import { ComponenteA as PrimeiroComponente } from "./components/ExportacaoNomeada";
import Rodape from "./components/Rodape";
import Container from "./components/Container";
import Mensagem from "./components/Mensagem";
import ListaDeFrutas from "./components/ListaDeFrutas";
import Botao from "./components/Botao";
import Cabecalho from "./components/Cabecalho";
import { useState } from "react";
import Saudacao from "./components/Saudacao";
import User from "./components/User";
import UserProfile from "./components/UserProfile";
import NumberList from "./components/NumberList";
import Button2 from "./components/Button2";
import Saudacao2 from "./components/Saudacao2";
import Saudacao3 from "./components/Saudacao3";
import Saudacao4 from "./components/Saudacao4";
import Usuario from "./components/Usuario";
import Exercises from "./components/Exercises";

function App() {
  const frutas = ["Maçã", "Banana", "Laranja"];
  const pessoa = { nome: "João", idade: 30 };

  function handleClick() {
    alert("Botão clicado!");
  }

  const [texto, setTexto] = useState("Olá, Mundo!");

  const handleChange = () => {
    setTexto("Texto alterado!");
  };

  const user = { name: "Marcos", age: 45, email: "marcos@gmai.com" };

  return (
    <>
      {/* Componentes de Classe */}
      <Welcome name="João" />
      {/* Componentes Funcionais */}
      <Welcome2 name="Pedro" />
      {/* Exportação nomeada */}
      <ComponenteA />
      <ComponenteB />
      {/* Aliasing ao importar */}
      <PrimeiroComponente />
      {/* Renderizando Componentes dentro de Outros Componentes */}
      <Container>
        <Cabecalho />
        <p>Esta é a minha primeira aplicação React!</p>
        <Rodape />
      </Container>
      {/* Passando Strings e Números */}
      <Mensagem texto="Olá, Mundo!" contador={3} />
      {/* Passando Arrays e Objetos */}
      <ListaDeFrutas frutas={frutas} pessoa={pessoa} />
      {/* Passando Funções */}
      <Botao onClick={handleClick} />
      {/* Padrão de Dados Descendente */}
      <div>
        <Mensagem texto={texto} />
        <button onClick={handleChange}>Alterar Texto</button>
      </div>
      {/* Prop Types */}
      <Saudacao />
      {/* Tipos Primitivos */}
      <User name="João" age={30} />
      {/* Objetos e arrays */}
      <UserProfile user={user} />
      {/* Arrays com Tipos Específicos */}
      <NumberList numbers={[1, 2, 3]} />
      {/* Enums */}
      <Button2 type="submit" />
      {/* defaultProps */}
      <Saudacao2 />
      {/* defaultProps com Destructuring */}
      <Saudacao3 />
      {/* Desconstrução de Props em Variáveis */}
      <Saudacao4 nome="Alberto" />
      {/* Desconstrução de Múltiplas Props */}
      <Usuario nome="Matheus" idade={32} email="matheus@gmail.com" />
      {/* Exercícios */}
      <Exercises />
    </>
  );
}

export default App;
