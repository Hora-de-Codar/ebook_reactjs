import React, { createContext, useContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const themeState = {
    theme: "light",
    switchTheme: () => {},
  };

  return (
    <ThemeContext.Provider value={themeState}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
