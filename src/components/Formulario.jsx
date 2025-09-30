import { CampoDeFormulario } from "./CampoDeFormulario";
import { Input } from "./Input";
import { Label } from "./Label";
import { TituloFormulario } from "./TituloFormulario";

export function FormularioDeEvento() {
    return (
        <form className="form-evento">
            <TituloFormulario>
                Preencha para criar um evento:
            </TituloFormulario>
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
        </form>
    )
}