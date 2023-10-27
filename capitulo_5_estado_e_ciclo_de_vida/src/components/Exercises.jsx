import React, { useState, useEffect } from "react";

function AlternarTema() {
  const [tema, setTema] = useState("claro");

  const alterarTema = () => {
    setTema(tema === "claro" ? "escuro" : "claro");
  };

  return (
    <div
      style={{
        backgroundColor: tema === "claro" ? "#fff" : "#333",
        color: tema === "claro" ? "#000" : "#fff",
      }}
    >
      <p>O tema atual é {tema}</p>
      <button onClick={alterarTema}>Alternar Tema</button>
    </div>
  );
}

function MostrarEsconderTexto() {
  const [visivel, setVisivel] = useState(true);

  const alternarVisibilidade = () => {
    setVisivel(!visivel);
  };

  return (
    <div>
      {visivel && <p>Texto visível!</p>}
      <button onClick={alternarVisibilidade}>
        {visivel ? "Esconder" : "Mostrar"} Texto
      </button>
    </div>
  );
}

function ListaTarefas() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState("");

  const adicionarTarefa = () => {
    if (novaTarefa.trim()) {
      setTarefas([...tarefas, novaTarefa]);
      setNovaTarefa("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
      />
      <button onClick={adicionarTarefa}>Adicionar Tarefa</button>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}

function CarregarDados() {
  const [dados, setDados] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://api.exemplo.com/dados");
      const result = await response.json();
      setDados(result);
    }

    fetchData();
  }, []);

  return (
    <div>{dados ? <p>Dados carregados: {dados}</p> : <p>Carregando...</p>}</div>
  );
}

function Exercises() {
  return (
    <div>
      <h2>Exercícios: Estado e Ciclo de Vida</h2>
      <div>
        <h3>Exercício 1: Alterando o Tema</h3>
        <AlternarTema />
      </div>
      <div>
        <h3>Exercício 2: Mostrando e Escondendo Elementos</h3>
        <MostrarEsconderTexto />
      </div>
      <div>
        <h3>Exercício 3: Lista de Tarefas</h3>
        <ListaTarefas />
      </div>
      <div>
        <h3>Exercício 4: Carregando Dados Assíncronos</h3>
        <CarregarDados />
      </div>
    </div>
  );
}

export default Exercises;
