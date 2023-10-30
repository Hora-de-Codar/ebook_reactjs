import React from "react";
import { useNavigate } from "react-router-dom";

function PaginaProtegida() {
  let navigate = useNavigate();
  const estaAutenticado = true; // Substitua pela sua lógica de autenticação

  React.useEffect(() => {
    if (!estaAutenticado) {
      navigate("/login");
    }
  }, [estaAutenticado, navigate]);

  return (
    <div>
      <h1>Página Protegida</h1>
      <p>Conteúdo somente para usuários autenticados.</p>
    </div>
  );
}

export default PaginaProtegida;
