import React, { useState } from "react";
import { Input } from "./Components/Input/Input";
import { Botao } from "./Components/Botao/Botao";


export function Formulario() {
  const [valorInput, setValorInput] = useState("");

  const lidarComMudancaInput = (event) => {
    setValorInput(event.target.value);
  };

  const lidarComSubmit = (event) => {
    event.preventDefault();
    console.log("Valor do Input: ", valorInput);
  };

  return (
    <>
      <h2>Exemplo de Formulário</h2>
      <form onSubmit={lidarComSubmit}>
        <Input value={valorInput} onChange={lidarComMudancaInput} />
        <Botao texto="Enviar" />
      </form>
    </>
  );
}
