import './contacto.css'

export default function Contacto () {
    return (
        <>
            <h1>Estás en contacto</h1>

            <form name="contacto" data-netlify="true" netlify-honeypot="bot-field" hidden>
                <input type="text" name="nombre" />
                <input type="email" name="email" />
                <textarea name="comentario"></textarea>
            </form>

            <form action="./contacto/gracias" method="post" className='formulario'>
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

                <input type="hidden" name="form-name" value="contacto" />

                {/*<input type="submit" value="Enviar" />*/}
                <button type='submit'>Enviar</button>
            </form>
        </>
    )
}