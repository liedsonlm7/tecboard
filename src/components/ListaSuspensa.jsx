import "./ListaSuspensa.css";

export function ListaSuspensa({ itens, ...rest }) {
    return (
        <select {...rest} className="lista-suspensa-form" defaultValue="">
            <option value="" disabled>
                Selecione uma opcao
            </option>
            {itens.map(function (item) {
                return <option key={item.id} value={item.id}>
                    {item.name}
                </option>
            })}
        </select>
    )
}