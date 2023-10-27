import { useEffect } from "react";
import "./App.css";
import ComponenteExemplo from "./components/ComponenteExemplo";
import ComponenteExemplo2 from "./components/ComponenteExemplo2";
import Contador from "./components/Contador";
import ExemploEventoSintetico from "./components/ExemploEventoSintetico";
import Formulario from "./components/Formulario";
import Formulario2 from "./components/Formulario2";
import Formulario3 from "./components/Formulario3";
import Lista from "./components/Lista";
import MeuComponente from "./components/MeuComponente";
import ComponentePai from "./components/ComponentePai";
import Exercises from "./components/Exercises";

function App() {
  useEffect(() => {
    const handleKeyPress = (event) => {
      console.log("Tecla pressionada:", event.key);
    };

    window.addEventListener("keypress", handleKeyPress);

    // Limpeza do evento
    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
  }, []);

  return (
    <>
      {/* Manipulação de Eventos com React */}
      <MeuComponente />
      {/* O Que São Eventos Sintéticos? */}
      <ExemploEventoSintetico />
      {/* useState e Eventos */}
      <Contador />
      {/* useEffect e Eventos */}
      <ComponenteExemplo />
      {/* Custom Hooks e Eventos */}
      <ComponenteExemplo2 />
      {/* Lidando com Entradas de Texto */}
      <Formulario />
      {/* Submetendo o Formulário */}
      <Formulario2 />
      {/* Usando múltiplos campos de entrada */}
      <Formulario3 />
      {/* Delegação de Evento */}
      <Lista itens={["Maçã", "Laranja", "Uva"]} />
      {/* Manipulação de Eventos Globais */}
      <div>Pressione uma tecla...</div>
      {/* Padrões de Design para Propagação de Eventos */}
      <ComponentePai />
      {/* Exercícios */}
      <Exercises />
    </>
  );
}

export default App;
