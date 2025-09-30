import { CampoDeFormulario } from "./CampoDeFormulario";
import { Input } from "./Input";
import { Label } from "./Label";
import { TituloFormulario } from "./TituloFormulario";
import { Botao } from "./Botao";
import { ListaSuspensa } from "./ListaSuspensa";

import "./Formulario.css"


export function FormularioDeEvento({ temas, handleSubmit }) {

    function handleSubmit(formData) {
        console.log("criar um novo evento", formData)
        const evento = {
            capa: formData.get('capa'),
            tema: temas.find(function (item) {
                return item.id == formData.get('tema')
            }),
            data: new Date(formData.get('date')),
            titulo: formData.get('nome')
        }

        handleSubmit(evento)
    }

    return (
        <form className="form-evento" action={handleSubmit}>
            <TituloFormulario>
                Preencha para criar um evento:
            </TituloFormulario>
            <div className="campos">
                <CampoDeFormulario>
                    <Label htmlFor="nome">
                        Qual o nome do evento
                    </Label>
                    <Input
                        type="text"
                        name="nome"
                        id="nome"
                        placeholder="Summer dev hits"
                    />
                </CampoDeFormulario>
                <CampoDeFormulario>
                    <Label htmlFor="capa">
                        Qual o endererço da imagem de capa?
                    </Label>
                    <Input
                        type="text"
                        name="capa"
                        id="capa"
                        placeholder="http://..."
                    />
                </CampoDeFormulario>
                <CampoDeFormulario>
                    <Label htmlFor="date">
                        Data do evento
                    </Label>
                    <Input
                        type="date"
                        name="date"
                        id="date"

                    />
                </CampoDeFormulario>
                <CampoDeFormulario>
                    <Label htmlFor="tema">
                       Tema do evento
                    </Label>
                    <ListaSuspensa id="tema" name="tema" itens={temas}/>
                </CampoDeFormulario>
            </div>
            <div className="actions">
                <Botao>
                    Criar evento
                </Botao>
            </div>

        </form>
    )
}