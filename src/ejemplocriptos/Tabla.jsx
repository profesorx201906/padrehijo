const Tabla = (props) => {
  const manejarClick = (cripto) => {
    if (props.modoHijo) {
      props.onRecibirDesdeHijo(cripto);
    } else {
      props.onClick(cripto);
    }
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px' }}>
      <h2>{props.titulo}</h2>
      {props.criptos.length === 0 ? (
        <p>No hay criptos en esta tabla.</p>
      ) : (
        <table border="1" cellPadding="8" style={{ width: '100%', cursor: 'pointer' }}>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Símbolo</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {props.criptos.map((cripto) => (
              <tr key={cripto.id} onClick={() => manejarClick(cripto)}>
                <td>{cripto.name}</td>
                <td>{cripto.symbol}</td>
                <td>${Number(cripto.price_usd).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <p style={{ fontSize: '0.8em', color: '#777' }}>
        Haz clic para mover la criptomoneda {props.modoHijo ? 'al padre' : 'al hijo'}.
      </p>
    </div>
  );
};

export default Tabla;
