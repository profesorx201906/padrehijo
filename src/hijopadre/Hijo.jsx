const Hijo = (props) => {

    return (
        <div>
            <h2>Componente hijo</h2>
            <input
                type="text"
                placeholder="Escribe tu nombre"
                onChange={(e) => props.recibirDato(e.target.value)}
            />
        </div>
    );
}

export default Hijo;
