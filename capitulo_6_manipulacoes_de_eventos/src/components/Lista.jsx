function Lista({ itens }) {
  const handleClick = (event) => {
    alert(`Item clicado: ${event.target.textContent}`);
  };

  return (
    <ul onClick={handleClick}>
      {itens.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default Lista;
