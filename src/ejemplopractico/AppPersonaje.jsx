import { useState } from 'react';
import Personaje from './Personaje';

const AppPersonaje = () => {
  const [idPersonaje, setIdPersonaje] = useState('');
  const [nombreRecibido, setNombreRecibido] = useState('');

  const manejarCambio = (e) => {
    setIdPersonaje(e.target.value);
  };

  const recibirNombreDelHijo = (nombre) => {
    setNombreRecibido(nombre);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Buscar personaje de Rick and Morty</h1>
      <input
        type="number"
        placeholder="ID del personaje (1 - 826)"
        value={idPersonaje}
        onChange={manejarCambio}
      />
      <p><strong>Nombre recibido del hijo:</strong> {nombreRecibido}</p>
      
      <Personaje id={idPersonaje} onNombreCargado={recibirNombreDelHijo} />
    </div>
  );
};

export default AppPersonaje;
