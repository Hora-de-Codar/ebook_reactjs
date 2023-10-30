import React from "react";
import { Link, useLocation } from "react-router-dom";

const posts = [
  { id: 1, title: "Post 1", content: "Conteúdo do post 1", category: "tech" },
  { id: 2, title: "Post 2", content: "Conteúdo do post 2", category: "health" },
  { id: 3, title: "Post 3", content: "Conteúdo do post 3", category: "tech" },
];

function ListaDePosts() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryFilter = queryParams.get("categoria");

  const filteredPosts = categoryFilter
    ? posts.filter((post) => post.category === categoryFilter)
    : posts;

  return (
    <div>
      <h1>Lista de Posts</h1>
      {filteredPosts.map((post) => (
        <div key={post.id}>
          <Link to={`/post/${post.id}?categoria=${post.category}`}>
            {post.title}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ListaDePosts;
