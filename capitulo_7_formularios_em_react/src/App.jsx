import "./App.css";
import Exercises from "./components/Exercises";
import FormularioControlado from "./components/FormularioControlado";
import FormularioEmail from "./components/FormularioEmail";
import FormularioOpcoes from "./components/FormularioOpcoes";
import FormularioSelecao from "./components/FormularioSelecao";

function App() {
  return (
    <>
      {/* Introdução aos Formulários Controlados */}
      <FormularioControlado />
      {/* Trabalhando com Input de Texto */}
      <FormularioEmail />
      {/* Lidando com Select e Options */}
      <FormularioSelecao />
      {/* Trabalhando com Checkbox e Radio Buttons */}
      <FormularioOpcoes />
      {/* Exercícios */}
      <Exercises />
    </>
  );
}

export default App;
