import { useState } from 'react';
import Hijo from './Hijo';

const Padre = () => {
    const [valorPadre, setValorPadre] = useState("");
    const [valorDesdeHijo, setValorDesdeHijo] = useState("");

    const cambiarMensaje = (e) => {
        setValorPadre(e.target.value);
    };

    const recibirMensaje = (valor) => {
        setValorDesdeHijo(valor);
    };

    return (
        <div>
            <h1>Padre</h1>
            <p>Valor recibido del hijo: {valorDesdeHijo}</p>
            <input
                type="text"
                value={valorPadre}
                onChange={cambiarMensaje}
                placeholder="Escribe para enviar al hijo"
            />
            <Hijo valorDesdePadre={valorPadre} onEnviarAlPadre={recibirMensaje} />
        </div>
    );
}

export default Padre;
