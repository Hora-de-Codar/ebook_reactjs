import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListaDePosts from "./components/ListaDePosts";
import Post from "./components/Post";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListaDePosts />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
