import { useEffect, useState } from 'react';
import axios from 'axios';

const useLibro = (isbn) => {
  const [libro, setLibro] = useState(null);
  const [error, setError] = useState(null);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    if (!isbn) return;

    const obtenerLibro = async () => {
      setCargando(true);
      setError(null);
      setLibro(null);

      try {
        const url = `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`;
        const response = await axios.get(url);
        const data = response.data[`ISBN:${isbn}`];

        if (!data) {
          throw new Error('No se encontró información para ese ISBN');
        }

        const libroFormateado = {
          title: data.title || 'Sin título',
          authors: data.authors?.map((a) => a.name) || [],
          pages: data.number_of_pages || 'Desconocido',
          publish_date: data.publish_date || 'Desconocida',
        };
        

        setLibro(libroFormateado);
      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false);
      }
    };

    obtenerLibro();
  }, [isbn]);

  return { libro, error, cargando };
};

export default useLibro;
