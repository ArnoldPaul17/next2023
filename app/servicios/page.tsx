export default function Servicios () {
    return (
        <>
            <h1>Estás en Servicio</h1>

            <form action="" method="" className='formulario'>
                <label>
                    Nombre:
                    <input type="text" />
                </label>
                <label>
                    Mail:
                    <input type="email" />
                </label>
                <label>
                    Comentarios:
                    <textarea></textarea>
                </label>

                <input type="submit" value="Enviar" />
            </form>
        </>
    )
}