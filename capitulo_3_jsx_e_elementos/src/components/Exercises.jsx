function Exercises() {
  const alunos = [
    { id: 1, nome: "Ana" },
    { id: 2, nome: "Carlos" },
    { id: 3, nome: "Beatriz" },
  ];
  const comentario = "<script>alert('Ataque!');</script>";

  return (
    <div>
      {/* Exercício 1 */}
      <div>
        <h1>Meu Blog React</h1>
        <h2>Aprendendo JSX</h2>
      </div>

      {/* Exercício 2 */}
      <button className="btn-primary">Clique Aqui!</button>

      {/* Exercício 3 */}
      <ul>
        {alunos.map((aluno) => (
          <li key={aluno.id}>{aluno.nome}</li>
        ))}
      </ul>

      {/* Exercício 4 */}
      <div>{comentario}</div>
    </div>
  );
}

export default Exercises;
