import { useEffect, useState } from 'react';
import useBitCoin from './useBitCoin';
import TablaCripto from './Tabla';

const AppCriptos = () => {
  const { criptos, error } = useBitCoin();
  const [ladoPadre, setLadoPadre] = useState([]);
  const [ladoHijo, setLadoHijo] = useState([]);

  useEffect(() => {
    setLadoPadre(criptos); 
  }, [criptos]);

  const moverAHijo = (cripto) => {
    setLadoPadre((prev) => prev.filter((c) => c.id !== cripto.id));
    setLadoHijo((prev) => [...prev, cripto]);
  };

  const recibirDesdeHijo = (cripto) => {
    setLadoHijo((prev) => prev.filter((c) => c.id !== cripto.id));
    setLadoPadre((prev) => [...prev, cripto]);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Criptomonedas</h1>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <TablaCripto
          titulo="Tabla en el PADRE"
          criptos={ladoPadre}
          onClick={moverAHijo}
        />

        <TablaCripto
          titulo="Tabla en el HIJO"
          criptos={ladoHijo}
          modoHijo={true}
          onRecibirDesdeHijo={recibirDesdeHijo}
        />
      </div>
    </div>
  );
};

export default AppCriptos;
