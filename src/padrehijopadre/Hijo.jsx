import { useState } from 'react';

const Hijo = (props) => {
    const [valorHijo, setValorHijo] = useState("");

    // Maneja el input del hijo
    const manejarCambioHijo = (e) => {
        const nuevoValor = e.target.value;
        setValorHijo(nuevoValor);
        props.onEnviarAlPadre(nuevoValor); // se lo envía al padre
    };

    return (
        <div>
            <h2>Hijo</h2>
            <p>Valor recibido del padre: {props.valorDesdePadre}</p>
            <input
                type="text"
                value={valorHijo}
                onChange={manejarCambioHijo}
                placeholder="Escribe para enviar al padre"
            />
        </div>
    );
}

export default Hijo;
