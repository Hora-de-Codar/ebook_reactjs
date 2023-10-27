import { useState } from "react";

function Formulario2() {
  const [nome, setNome] = useState("");

  const handleChange = (event) => {
    setNome(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Nome submetido:", nome);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input type="text" value={nome} onChange={handleChange} />
      </label>
      <button type="submit">Submeter</button>
    </form>
  );
}

export default Formulario2;
