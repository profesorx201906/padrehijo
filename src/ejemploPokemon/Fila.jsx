import Celda from './Celda';

const Fila = ({ pokemon, onClick }) => {
  return (
    <tr onClick={() => onClick(pokemon)} style={{ cursor: 'pointer' }}>
      <Celda>{pokemon.id}</Celda>
      <Celda>{pokemon.name}</Celda>
      <Celda>
        <img src={pokemon.image} alt={pokemon.name} width={50} />
      </Celda>
    </tr>
  );
};

export default Fila;
