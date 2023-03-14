import { PlusCircle } from "phosphor-react";
import { Container } from "./styles";

export function TaskInput() {
    return (
        <Container>
            <input type="text" placeholder="Adicione uma nova tarefa" />
            <button type="submit">
                Criar 
                <PlusCircle size={20} />
            </button>
        </Container>
    )
}