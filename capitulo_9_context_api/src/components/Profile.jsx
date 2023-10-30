import React from "react";
import { useUser } from "../contexts/UserContext";
import { useTheme } from "../contexts/ThemeContext";

const Profile = () => {
  const { name } = useUser();
  const { theme } = useTheme();

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <h2>Perfil (Multiplos contextos)</h2>
      <p>Nome: {name}</p>
      <p>Tema atual: {theme}</p>
    </div>
  );
};

export default Profile;
