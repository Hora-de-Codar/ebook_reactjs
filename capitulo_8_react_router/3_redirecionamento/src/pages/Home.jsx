import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Bem-vindo à página inicial!</p>
      <Link to="/pagina-protegida">Ir para Página Protegida</Link>
    </div>
  );
}

export default Home;
