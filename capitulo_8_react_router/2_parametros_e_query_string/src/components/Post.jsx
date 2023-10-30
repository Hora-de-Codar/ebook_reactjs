import React from "react";
import { useParams, useLocation } from "react-router-dom";

const posts = [
  { id: "1", title: "Post 1", content: "Conteúdo do post 1", category: "tech" },
  {
    id: "2",
    title: "Post 2",
    content: "Conteúdo do post 2",
    category: "health",
  },
  { id: "3", title: "Post 3", content: "Conteúdo do post 3", category: "tech" },
];

function Post() {
  const { id } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoria = queryParams.get("categoria");

  const post = posts.find((p) => p.id === id);

  return (
    <div>
      {post ? (
        <div>
          <h1>{post.title}</h1>
          <p>Categoria: {categoria}</p>
          <p>{post.content}</p>
        </div>
      ) : (
        <p>Post não encontrado</p>
      )}
    </div>
  );
}

export default Post;
