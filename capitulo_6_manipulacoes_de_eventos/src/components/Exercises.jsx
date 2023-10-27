import React, { useState, useEffect } from "react";

function Exercises() {
  // Exercício 1: Entendendo Eventos Sintéticos
  const handleButtonClick = (evento) => {
    console.log(evento);
    alert("Botão clicado!");
  };

  // Exercício 2: Prevenindo Comportamento Padrão
  const [inputValue, setInputValue] = useState("");
  const handleFormSubmit = (evento) => {
    evento.preventDefault();
    alert("Valor inserido: " + inputValue);
  };

  // Exercício 3: Usando useEffect com Eventos
  const [largura, setLargura] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setLargura(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Exercício 4: Manipulação de Eventos em Formulários com Múltiplos Campos
  const [formValues, setFormValues] = useState({ campo1: "", campo2: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleMultipleFieldsSubmit = (e) => {
    e.preventDefault();
    alert(`Campo 1: ${formValues.campo1}, Campo 2: ${formValues.campo2}`);
  };

  return (
    <div>
      {/* Exercício 1 */}
      <button onClick={handleButtonClick}>Clique-me (Exercício 1)</button>

      {/* Exercício 2 */}
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Submit (Exercício 2)</button>
      </form>

      {/* Exercício 3 */}
      <p>Largura da janela: {largura}px (Exercício 3)</p>

      {/* Exercício 4 */}
      <form onSubmit={handleMultipleFieldsSubmit}>
        <input
          type="text"
          name="campo1"
          value={formValues.campo1}
          onChange={handleChange}
        />
        <input
          type="text"
          name="campo2"
          value={formValues.campo2}
          onChange={handleChange}
        />
        <button type="submit">Enviar (Exercício 4)</button>
      </form>
    </div>
  );
}

export default Exercises;
