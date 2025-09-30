
export function FormularioDeEvento() {
    return (
        <form className="form-evento">
            <h2>Preencha para criar um evento:</h2>
            <fieldset>
                <label htmlFor="nome">
                    Qual o nome do evento
                </label>
                <input type="text" name="nome" id="nome" />
            </fieldset>
        </form>
    )
}