import React from "react";
import { UserProvider } from "./contexts/UserContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import UserInfo from "./components/UserInfo";
import Profile from "./components/Profile";

import "./App.css";

const App = () => {
  return (
    <UserProvider>
      <ThemeProvider>
        <div>
          <h1>Context API</h1>
          <UserInfo />
          <Profile />
        </div>
      </ThemeProvider>
    </UserProvider>
  );
};

export default App;
