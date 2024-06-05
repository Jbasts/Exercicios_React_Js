import { useEffect, useState } from "react";
import { Input } from "./Components/Input/Input";

export function ListaBusca() {
  const jogadores = [
    { id: 1, nome: "Lionel Messi" },
    { id: 2, nome: "Cristiano Ronaldo" },
    { id: 3, nome: "Ronaldo Nazário" },
    { id: 4, nome: "Ronaldo de Assis" },
    { id: 5, nome: "André Balada" },
    { id: 6, nome: "Payet" },
    { id: 7, nome: "Matheus" },
    { id: 8, nome: "Roberto Carlos" },
    { id: 9, nome: "Antony" },
    { id: 10, nome: "Romario" },
    { id: 11, nome: "Hazard" },
    { id: 12, nome: "Di Maria" },
    { id: 13, nome: "Courtuis" },
  ];

  const [termoBusca, setTermoBusca] = useState("");
  const [dadosFiltrados, setDadosFiltrados] = useState(jogadores);

  useEffect(() => {
    const dadosFiltrados = jogadores.filter((jog) =>
      jog.nome.toLowerCase().includes(termoBusca.toLowerCase())
    );
    setDadosFiltrados(dadosFiltrados);
  }, [termoBusca]);

  return (
    <>
      <div>
        <Input
          type="text"
          placeholder="Digite o termo que você quer buscar"
          value={termoBusca}
          onChange={(e) => setTermoBusca(e.target.value)}
        />
        <ul>
          {dadosFiltrados.map((item) => (
            <li key={item.id}>
              {item.id} - {item.nome}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
