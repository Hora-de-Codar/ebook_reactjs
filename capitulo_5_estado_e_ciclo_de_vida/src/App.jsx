import { useState } from "react";
import "./App.css";
import Alternador from "./components/Alternador";
import Botao from "./components/Botao";
import Contador from "./components/Contador";
import Contador2 from "./components/Contador2";
import Contador3 from "./components/Contador3";
import DadosUsuario from "./components/DadosUsuario";
import Dobrador from "./components/Dobrador";
import FormularioCadastro from "./components/FormularioCadastro";
import FormularioContato from "./components/FormularioContato";
import Multiplicador from "./components/Multiplicador";
import Temporizador from "./components/Temporizador";
import Pai from "./components/Pai";
import Pai2 from "./components/Pai2";
import Exercises from "./components/Exercises";

function App() {
  const [contador, setContador] = useState(0);

  const incrementar = () => setContador(contador + 1);
  const decrementar = () => setContador(contador - 1);
  return (
    <>
      {/* Exemplo de Estado em um Componente Funcional */}
      <Contador />
      {/* Boas Práticas */}
      <Dobrador />
      {/* Imutabilidade do Estado */}
      <Alternador />
      {/* Atualizações Assíncronas */}
      <Multiplicador />
      {/* Agrupando Estados Relacionados */}
      <FormularioContato />
      {/* Manipulando Estados Complexos */}
      <FormularioCadastro />
      {/* Estado e Efeitos Colaterais */}
      <DadosUsuario />
      {/* Exemplo Básico de useEffect */}
      <Contador2 />
      {/* Limpeza de Efeitos */}
      <Temporizador />
      {/* Exemplo Prático: Contador Compartilhado */}
      <div>
        <Botao onClick={incrementar} texto="Incrementar" />
        <Contador3 valor={contador} />
        <Botao onClick={decrementar} texto="Decrementar" />
      </div>
      {/* Props para Passar Dados para Baixo */}
      <Pai />
      {/* Callbacks para Enviar Dados para Cima */}
      <Pai2 />
      {/* Exercícios */}
      <Exercises />
    </>
  );
}

export default App;
