import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  NavLink,
} from "react-router-dom";
import Home from "./Home";
import About from "./About";

import "./App.css";
import Parent from "./Parent";
import Child from "./Child";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            Home
          </NavLink>{" "}
          |
          <NavLink
            to="/about"
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            About
          </NavLink>{" "}
          |
          <NavLink
            to="/parent"
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            Parent
          </NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/parent" element={<Parent />}>
            <Route path="child" element={<Child />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
