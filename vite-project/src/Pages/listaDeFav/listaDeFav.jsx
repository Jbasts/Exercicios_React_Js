
import { useState } from "react"

export function ListaDeFavorito() {
  const favoritos = [
    { id: 1, name: "CSGO" },
    { id: 2, name: "Lol" },
    { id: 3, name: "GOT"},
  ]

  const [listaDefavorito, setListaDeFavorito] = useState(favoritos);
  const [novoFavorito, setNovoFavorito] = useState('');

  function adicionarFavorito() {
    if (novoFavorito.trim() !== '') {
      const EntradaNovoFavorito = {
        id: listaDefavorito.length + 1,
        name: novoFavorito,
      };
      setListaDeFavorito([...listaDefavorito, EntradaNovoFavorito]);
      setNovoFavorito('');
    }

  }


  return (
    <>
      <h1>meus favoritos</h1>

      <div>
        <ul>
          {listaDefavorito.map((favorito) => (
            <li key={favorito.id}>{favorito.name}</li>
          ))}
        </ul>
        <input
          type="text"
          value={novoFavorito}
          onChange={(e) => setNovoFavorito(e.target.value)}
          placeholder="Adicionar ao Favorito"
        />
        <br />
        <br />
        <button onClick={adicionarFavorito}>Adicionar</button>

      </div>
    </>
  )
}