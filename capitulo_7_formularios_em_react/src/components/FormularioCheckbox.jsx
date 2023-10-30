import React, { useState } from "react";

function FormularioCheckbox() {
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Checkbox 1:", checkbox1);
    console.log("Checkbox 2:", checkbox2);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="checkbox"
          checked={checkbox1}
          onChange={(e) => setCheckbox1(e.target.checked)}
        />
        Checkbox 1
      </label>
      <label>
        <input
          type="checkbox"
          checked={checkbox2}
          onChange={(e) => setCheckbox2(e.target.checked)}
        />
        Checkbox 2
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default FormularioCheckbox;
