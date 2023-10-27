function ComponentePai() {
  const handleDivClick = () => {
    console.log("Div clicada!");
  };

  const handleButtonClick = (event) => {
    event.stopPropagation();
    console.log("Botão clicado!");
  };

  return (
    <div onClick={handleDivClick}>
      <button onClick={handleButtonClick}>Clique em mim</button>
    </div>
  );
}

export default ComponentePai;
