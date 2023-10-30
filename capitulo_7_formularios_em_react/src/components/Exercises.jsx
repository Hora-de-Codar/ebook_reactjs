import React from "react";
import FormularioSelect from "./FormularioSelect";
import FormularioCheckbox from "./FormularioCheckbox";
import FormularioValidacao from "./FormularioValidacao";
import FormularioControlado2 from "./FormularioControlado2";

function Exercises() {
  return (
    <div>
      <h2>Exercício 1: Formulário Controlado com Input de Texto</h2>
      <FormularioControlado2 />

      <h2>Exercício 2: Manipulando um Select com Opções</h2>
      <FormularioSelect />

      <h2>Exercício 3: Trabalhando com Checkboxes</h2>
      <FormularioCheckbox />

      <h2>Exercício 4: Validação Básica de Formulário</h2>
      <FormularioValidacao />
    </div>
  );
}

export default Exercises;
