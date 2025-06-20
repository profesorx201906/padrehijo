import useLibro from './useLibro';

const Libro = ({ isbn, onTituloCargado }) => {
  const { libro, error, cargando } = useLibro(isbn);

  if (!isbn) return <p>Introduce un ISBN para buscar un libro.</p>;
  if (cargando) return <p>Buscando libro...</p>;
  if (error) {
    onTituloCargado("No encontrado");
    return <p style={{ color: 'red' }}>Error: {error}</p>;
  }

  if (libro) {
    onTituloCargado(libro.title);
    return (
      <div style={{ marginTop: '20px' }}>
        <h2>{libro.title}</h2>
        <p><strong>Autor:</strong> {libro.authors?.join(', ')}</p>
        <p><strong>Número de páginas:</strong> {libro.pages}</p>
        <p><strong>Publicado en:</strong> {libro.publish_date}</p>
      </div>
    );
  }

  return null;
};

export default Libro;
