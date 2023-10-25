function handleClick() {
  alert("Botão foi clicado!");
}

function AlertButton() {
  return <button onClick={handleClick}>Clique em mim!</button>;
}

export default AlertButton;
