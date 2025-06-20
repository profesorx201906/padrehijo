import { useState } from 'react';
import Hijo from './Hijo';

const Padre = () => {
  const [nombre, setNombre] = useState("");

  const asignarNombre = (e) => {
    setNombre(e.target.value);
  };

  return (
    <div>
      <h1>Componente Padre</h1>
      <input
        type="text"
        value={nombre}
        onChange={asignarNombre}
        placeholder="Escribe tu nombre"
      />
      <Hijo nombre={nombre} />
    </div>
  );
};

export default Padre;

