import React from "react";
import Contador from "./components/Contador";
import MensagemDeBoasVindas from "./components/MensagemDeBoasVindas";
import ComponentePai from "./components/TemaContext";
import ContadorComReducer from "./components/ContadorComReducer";
import ComponentePaiCallback from "./components/ComponentePaiCallback";
import AppUseMemo from "./components/AppUseMemo";

import "./App.css";

function App() {
  return (
    <div>
      <h1>Exemplos de Hooks em React</h1>
      <h2>useState</h2>
      <Contador />

      <h2>useEffect</h2>
      <MensagemDeBoasVindas />

      <h2>useContext</h2>
      <ComponentePai />

      <h2>useReducer</h2>
      <ContadorComReducer />

      <h2>useCallback</h2>
      <ComponentePaiCallback />

      <h2>useMemo</h2>
      <AppUseMemo />
    </div>
  );
}

export default App;
