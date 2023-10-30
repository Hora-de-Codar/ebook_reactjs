import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === "usuario") {
      // Aqui você poderia definir um estado de autenticação
      navigate("/pagina-protegida");
    } else {
      alert("Usuário não reconhecido");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nome de usuário:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;
