import "./App.css";
import Welcome from "./components/Welcome";
import Welcome2 from "./components/Welcome2";

function App() {
  return (
    <>
      {/* Componentes de Classe */}
      <Welcome name="João" />
      {/* Componentes Funcionais */}
      <Welcome2 name="Pedro" />
    </>
  );
}

export default App;
