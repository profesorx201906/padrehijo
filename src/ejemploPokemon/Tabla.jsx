import usePokemons from './usePokemons';
import Encabezado from './Encabezado';
import Fila from './Fila';
import Footer from './Footer';

const Tabla = ({ cantidad, onSeleccionar }) => {
  const { pokemons, error } = usePokemons(cantidad);

  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <table border="1" cellPadding="8" style={{ marginTop: 20, width: '100%' }}>
      <Encabezado />
      <tbody>
        {pokemons.map((pokemon) => (
          <Fila key={pokemon.name} pokemon={pokemon} onClick={onSeleccionar} />
        ))}
      </tbody>
      <Footer total={pokemons.length} />
    </table>
  );
};

export default Tabla;
