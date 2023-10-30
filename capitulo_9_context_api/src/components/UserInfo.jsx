import React from "react";
import { useUser } from "../contexts/UserContext";

const UserInfo = () => {
  const { name, email } = useUser();

  return (
    <div>
      <h2>Informação de usuário (Contexto único)</h2>
      <p>Nome: {name}</p>
      <p>E-mail: {email}</p>
    </div>
  );
};

export default UserInfo;
