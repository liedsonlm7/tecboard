import { CampoDeFormulario } from "./CampoDeFormulario";
import { Input } from "./Input";
import { Label } from "./Label";
import { TituloFormulario } from "./TituloFormulario";

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
            </div>

        </form>
    )
}