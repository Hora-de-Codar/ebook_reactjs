import React from "react";
import { useEffect } from "react";
import { Routes, Route, NavLink, useNavigate, Outlet } from "react-router-dom";

function PaginaProtegida() {
  return <h2>Página Protegida</h2>;
}

function Login() {
  return <h2>Página de Login</h2>;
}

function Home() {
  return <h2>Home</h2>;
}

function RouteGuard({ children }) {
  let isAuthenticated = false; // Substitua isso pela sua lógica de autenticação
  let navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("login", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? children : <Outlet />;
}

function Exercicio4() {
  return (
    <div>
      <h1>Exercício 4</h1>
      <nav>
        <NavLink to="" end>
          Home
        </NavLink>{" "}
        | <NavLink to="pagina-protegida">Página Protegida</NavLink> |{" "}
        <NavLink to="login">Login</NavLink>
      </nav>
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route element={<RouteGuard />}>
          <Route path="pagina-protegida" element={<PaginaProtegida />} />
        </Route>
      </Routes>
    </div>
  );
}

export default Exercicio4;
