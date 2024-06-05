import React, { useState, useEffect } from "react";
import "./styles/Desafio.css";

export function Desafio() {
  const cores = ["#8A2BE2", "#FF4500 ", "##00CED1","#F0FF33"];
  const [corAtual, setCorAtual] = useState(cores[0]);

  useEffect(() => {
    document.body.style.backgroundColor = corAtual;
  }, [corAtual]);

  const mudarCor = () => {
    const novaCor = cores[Math.floor(Math.random() * cores.length)];
    setCorAtual(novaCor);
  };

  return (
    <>
      <div id="alvo">
        <h1>Cor atual - {corAtual}</h1>
        <button onClick={mudarCor}>Clique aqui!</button>
      </div>
    </>
  );
}
