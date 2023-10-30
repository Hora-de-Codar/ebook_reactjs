import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import Child from "./Child";

function Parent() {
  return (
    <div>
      <h2>Parent</h2>
      <nav>
        <Link to="child">Child</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Parent;
