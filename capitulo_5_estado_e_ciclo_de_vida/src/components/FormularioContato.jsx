import React, { useState } from "react";

function FormularioContato() {
  const [formulario, setFormulario] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({
      ...formulario,
      [name]: value,
    });
  };

  return (
    <div>
      <div>
        <input
          type="text"
          name="nome"
          value={formulario.nome}
          onChange={handleChange}
          placeholder="Nome"
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          value={formulario.email}
          onChange={handleChange}
          placeholder="Email"
        />
      </div>
      <div>
        <textarea
          name="mensagem"
          value={formulario.mensagem}
          onChange={handleChange}
          placeholder="Mensagem"
        />
      </div>
      <button type="submit">Enviar</button>
    </div>
  );
}

export default FormularioContato;
