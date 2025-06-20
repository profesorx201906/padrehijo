const Hijo = (props) => {
    return (
        <div>
            <h2>Componente Hijo</h2>
            <p>Hola, soy el hijo y recibí desde el padre el nombre : {props.nombre}</p>
        </div>
    );
};

export default Hijo;
