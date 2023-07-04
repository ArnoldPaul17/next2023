'use client';

import { useState } from "react";

export default function Servicios () {
    const [number, setNumber] = useState(0);

    return (
        <>
            <h1>Estás en Servicio</h1>

            <p>Por ahora vamos {number}</p>
            <button onClick={() => {setNumber(number + 1)}}>
                sumar 1 al numero
            </button>
        </>
    )
}