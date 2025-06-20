import { useState } from 'react';
import Hijo from './Hijo';

const Padre = () => {
    const [nombre, setNombre] = useState("");
    const recibirNombre = (nuevoValor) => {
        setNombre(nuevoValor);
    };

    return (
        <div>
            <h1>Componente Padre</h1>
            <p>Nombre recibido desde Hijo : {nombre}</p>
            <Hijo recibirDato={recibirNombre} />
        </div>
    );
}

export default Padre;
