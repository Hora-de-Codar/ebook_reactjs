import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PaginaProtegida from "./pages/PaginaProtegida";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pagina-protegida" element={<PaginaProtegida />} />
      </Routes>
    </Router>
  );
}

export default App;
