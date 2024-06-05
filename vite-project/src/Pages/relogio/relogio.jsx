import React, { useState, useEffect } from 'react';

function Relogio() {
  const [horaAtual, setHoraAtual] = useState(new Date());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHoraAtual(new Date());
    }, 1000);

    // Limpar o intervalo quando o componente for desmontado
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div>
      <h2>Horário Local</h2>
      <p>{horaAtual.toLocaleTimeString()}</p>
    </div>
  );
}

export default Relogio;