import { useEffect, useState } from 'react';
import axios from 'axios';

const usePokemons = (cantidad) => {
  const [pokemons, setPokemons] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerPokemons = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${cantidad}`);
        const datos = await Promise.all(
          response.data.results.map(async (p, index) => {
            const detalle = await axios.get(p.url);
            return {
              id: detalle.data.id,
              name: detalle.data.name,
              image: detalle.data.sprites.front_default,
              types: detalle.data.types.map(t => t.type.name),
              stats: detalle.data.stats.map(s => ({
                name: s.stat.name,
                base: s.base_stat,
              }))
            };
          })
        );
        setPokemons(datos);
        setError(null);
      } catch (e) {
        setError('Error al cargar Pokémons');
      }
    };

    obtenerPokemons();
  }, [cantidad]);

  return { pokemons, error };
};

export default usePokemons;
