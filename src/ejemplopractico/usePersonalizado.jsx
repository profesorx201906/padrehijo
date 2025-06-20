import { useEffect, useState } from 'react';
import axios from 'axios';

const usePersonalizado = (id) => {
  const [personaje, setPersonaje] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const obtenerPersonaje = async () => {
      try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
        setPersonaje(response.data);
        setError(null);
      } catch (error) {
        setPersonaje(null);
        setError("No encontrado");
      }
    };

    obtenerPersonaje();
  }, [id]);

  return { personaje, error };
};

export default usePersonalizado;
