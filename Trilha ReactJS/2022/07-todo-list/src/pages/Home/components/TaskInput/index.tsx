import { PlusCircle } from "phosphor-react";
import { useForm } from "react-hook-form";
import { Container, ErrorMessage } from "./styles";

interface TaskProps {
    description: string;
}

export function TaskInput() {

    const {register, handleSubmit, formState: {errors}} = useForm<TaskProps>();

    function handleCreateNewTask(data : TaskProps) {
        console.log(data);
    }

    return (
        <>
            <Container onSubmit={handleSubmit(handleCreateNewTask)}>
                <input type="text" placeholder="Adicione uma nova tarefa" {...register("description", {required: true})} />
                <button type="submit">
                    Criar 
                    <PlusCircle size={20} />
                </button>
            </Container>
            {errors.description && <ErrorMessage>Este campo é obrigatório!!!</ErrorMessage>}
        </>
    )
}