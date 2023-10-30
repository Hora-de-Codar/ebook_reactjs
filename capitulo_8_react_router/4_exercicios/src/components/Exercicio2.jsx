import React from "react";
import { Routes, Route, Link, useParams, Outlet } from "react-router-dom";

const produtos = [
  { id: 1, nome: "Produto A", descricao: "Descrição do produto A" },
  { id: 2, nome: "Produto B", descricao: "Descrição do produto B" },
  { id: 3, nome: "Produto C", descricao: "Descrição do produto C" },
];

function Exercicio2() {
  return (
    <div>
      <h1>Produtos</h1>
      <nav>
        {produtos.map((produto) => (
          <Link key={produto.id} to={`/exercicio2/produto/${produto.id}`}>
            {produto.nome}
          </Link>
        ))}
      </nav>
      <Routes>
        <Route path="produto/:id" element={<Produto />} />
      </Routes>
    </div>
  );
}

function Produto() {
  const { id } = useParams();
  const produto = produtos.find((p) => p.id === parseInt(id));

  return (
    <div>
      <h2>{produto.nome}</h2>
      <p>{produto.descricao}</p>
    </div>
  );
}

export default Exercicio2;
