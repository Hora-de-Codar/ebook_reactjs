function Usuario({ nome, idade, email }) {
  return (
    <div>
      <h1>{nome}</h1>
      <p>Idade: {idade}</p>
      <p>Email: {email}</p>
    </div>
  );
}

export default Usuario;
