import { useState } from "react";

function Formulario3() {
  const [form, setForm] = useState({ nome: "", idade: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <form>
      <label>
        Nome:
        <input
          type="text"
          name="nome"
          value={form.nome}
          onChange={handleChange}
        />
      </label>
      <label>
        Idade:
        <input
          type="text"
          name="idade"
          value={form.idade}
          onChange={handleChange}
        />
      </label>
    </form>
  );
}

export default Formulario3;
