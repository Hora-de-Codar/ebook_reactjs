import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";

function PaginaInicial() {
  return <h2>Página Inicial</h2>;
}

function Sobre() {
  return <h2>Sobre Nós</h2>;
}

function Contato() {
  return <h2>Contato</h2>;
}

function Exercicio1() {
  return (
    <div>
      <h1>Exercício 1</h1>
      <nav>
        <NavLink to="" end>
          Home
        </NavLink>{" "}
        | <NavLink to="sobre">Sobre</NavLink> |{" "}
        <NavLink to="contato">Contato</NavLink>
      </nav>
      <Routes>
        <Route index element={<PaginaInicial />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="contato" element={<Contato />} />
      </Routes>
    </div>
  );
}

export default Exercicio1;
