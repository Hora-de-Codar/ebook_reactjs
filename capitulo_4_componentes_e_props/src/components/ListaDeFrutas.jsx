function ListaDeFrutas(props) {
  return (
    <div>
      <ul>
        {props.frutas.map((fruta) => (
          <li key={fruta}>{fruta}</li>
        ))}
      </ul>
      <p>
        {props.pessoa.nome} tem {props.pessoa.idade} anos.
      </p>
    </div>
  );
}

export default ListaDeFrutas;
