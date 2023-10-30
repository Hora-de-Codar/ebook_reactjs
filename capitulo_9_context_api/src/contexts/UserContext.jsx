import React, { createContext, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const userState = {
    name: "Maria",
    email: "maria@example.com",
  };

  return (
    <UserContext.Provider value={userState}>{children}</UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
