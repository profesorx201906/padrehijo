import usePersonalizado from './usePersonalizado';

const Personaje = (props) => {
  const { personaje, error } = usePersonalizado(props.id);

  if (!props.id) return <p>Introduce un ID para buscar un personaje.</p>;

  if (!personaje && !error) return <p>Cargando personaje...</p>;

  if (error) {
    props.onNombreCargado("No encontrado");
    return <p>{error}</p>;
  }

  if (personaje) {
    props.onNombreCargado(personaje.name);
  }

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>{personaje.name}</h2>
      <img src={personaje.image} alt={personaje.name} width={150} />
      <p><strong>Estado:</strong> {personaje.status}</p>
      <p><strong>Especie:</strong> {personaje.species}</p>
      <p><strong>Género:</strong> {personaje.gender}</p>
    </div>
  );
};

export default Personaje;
