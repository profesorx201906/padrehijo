import { useEffect, useState } from 'react';
import axios from 'axios';

const useBitCoin = () => {
  const [criptos, setCriptos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerCriptos = async () => {
      try {
        const response = await axios.get('https://api.coinlore.net/api/tickers/?limit=10');
        const data = response.data.data.map((c) => ({
          id: c.id,
          name: c.name,
          symbol: c.symbol,
          price_usd: c.price_usd,
        }));
        setCriptos(data);
      } catch (err) {
        setError('Error al cargar criptomonedas');
        console.error(err);
      }
    };

    obtenerCriptos();
  }, []);

  return { criptos, error };
};

export default useBitCoin;
