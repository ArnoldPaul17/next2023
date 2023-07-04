import './contacto.css'

export default function Contacto () {
    return (
        <>
            <h1>Estás en contacto</h1>

            <form method="post" className='formulario'>
                <label>
                    Nombre:
                    <input type="text" name="nombre" />
                </label>
                <label>
                    Mail:
                    <input type="email" name="email" />
                </label>
                <label>
                    Comentarios:
                    <textarea name="comentario"></textarea>
                </label>

                {/*<input type="submit" value="Enviar" />*/}
                <button type='submit'>Enviar</button>
            </form>
        </>
    )
}