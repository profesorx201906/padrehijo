const CardDetalle = ({ pokemon, onClose }) => {
    if (!pokemon) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000
        }}>
            <div style={{
                background: 'white',
                padding: 20,
                borderRadius: 10,
                width: 300,
                textAlign: 'center',
                position: 'relative'
            }}>
                <button
                    onClick={onClose}

                >Cerrar</button>
                <h2>{pokemon.name}</h2>
                <img src={pokemon.image} alt={pokemon.name} />
                <p><strong>Tipos:</strong> {pokemon.types.join(', ')}</p>
                <div>
                    <strong>Estadísticas:</strong>
                    <ul style={{ textAlign: 'left' }}>
                        {pokemon.stats.map((s) => (
                            <li key={s.name}>{s.name}: {s.base}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CardDetalle;
