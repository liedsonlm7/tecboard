import { CampoDeFormulario } from "./CampoDeFormulario";
import { Input } from "./Input";
import { Label } from "./Label";
import { TituloFormulario } from "./TituloFormulario";
import { Botao } from "./Botao";
import { ListaSuspensa } from "./ListaSuspensa";

import "./Formulario.css"


export function FormularioDeEvento() {
    return (
        <form className="form-evento">
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
                    <Label htmlFor="date">
                        Qual a data do evento
                    </Label>
                    <Input
                        type="date"
                        name="date"
                        id="date"

                    />
                </CampoDeFormulario>
                <CampoDeFormulario>
                    <Label htmlFor="tema">
                       Qual o tema do evento?
                    </Label>
                    <ListaSuspensa />
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