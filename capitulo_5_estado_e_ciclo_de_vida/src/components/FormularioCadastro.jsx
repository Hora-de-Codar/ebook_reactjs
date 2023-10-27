import React, { useState } from "react";

function FormularioCadastro() {
  const [formulario, setFormulario] = useState({
    username: "",
    senha: "",
    confirmarSenha: "",
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
          name="username"
          value={formulario.username}
          onChange={handleChange}
          placeholder="Nome de usuário"
        />
      </div>
      <div>
        <input
          type="password"
          name="senha"
          value={formulario.senha}
          onChange={handleChange}
          placeholder="Senha"
        />
      </div>
      <div>
        <input
          type="password"
          name="confirmarSenha"
          value={formulario.confirmarSenha}
          onChange={handleChange}
          placeholder="Confirmar Senha"
        />
      </div>
      <button type="Submit">Enviar</button>
    </div>
  );
}

export default FormularioCadastro;
