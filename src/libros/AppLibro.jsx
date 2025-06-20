import { useState } from 'react';
import Libro from './Libro';

const AppLibro = () => {
  const [isbn, setIsbn] = useState('');
  const [tituloRecibido, setTituloRecibido] = useState('');

  const manejarCambio = (e) => {
    setIsbn(e.target.value);
  };

  const recibirTituloDelHijo = (titulo) => {
    setTituloRecibido(titulo);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Consulta de libros por ISBN (Open Library)</h1>
      <input
        type="text"
        placeholder="Introduce ISBN (Ej. 9780140328721)"
        value={isbn}
        onChange={manejarCambio}
      />
      <p><strong>Título recibido del hijo:</strong> {tituloRecibido}</p>

      <Libro isbn={isbn} onTituloCargado={recibirTituloDelHijo} />
    </div>
  );
};

export default AppLibro;
