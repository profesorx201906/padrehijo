import { useState } from 'react';
import Tabla from './Tabla';
import CardDetalle from './CardDetalle';

const AppPokemons = () => {
  const [cantidad, setCantidad] = useState(10);
  const [seleccionado, setSeleccionado] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);

  const mostrarDetalle = (pokemon) => {
    setSeleccionado(pokemon);
    setMostrarModal(true);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Tabla de Pokémons</h1>

      <label>
        Número de Pokémons a mostrar:&nbsp;
        <input
          type="number"
          value={cantidad}
          min={1}
          max={100}
          onChange={(e) => setCantidad(e.target.value)}
        />
      </label>

      <Tabla cantidad={cantidad} onSeleccionar={mostrarDetalle} />

      {mostrarModal && (
        <CardDetalle
          pokemon={seleccionado}
          onClose={() => setMostrarModal(false)}
        />
      )}
    </div>
  );
};

export default AppPokemons;
