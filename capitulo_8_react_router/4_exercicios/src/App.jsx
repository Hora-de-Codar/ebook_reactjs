import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Exercicio1 from "./components/Exercicio1";
import Exercicio2 from "./components/Exercicio2";
import Exercicio3 from "./components/Exercicio3";
import Exercicio4 from "./components/Exercicio4";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/exercicio1">Exercício 1</Link> |{" "}
          <Link to="/exercicio2">Exercício 2</Link> |{" "}
          <Link to="/exercicio3/123">Exercício 3 (com parâmetro id=123)</Link> |{" "}
          <Link to="/exercicio4">Exercício 4</Link>
        </nav>
        <Routes>
          <Route path="/exercicio1/*" element={<Exercicio1 />} />
          <Route path="/exercicio2/*" element={<Exercicio2 />} />
          <Route path="/exercicio3/:id" element={<Exercicio3 />} />
          <Route path="/exercicio4/*" element={<Exercicio4 />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

function NotFound() {
  return <h1>Página Não Encontrada</h1>;
}

export default App;
