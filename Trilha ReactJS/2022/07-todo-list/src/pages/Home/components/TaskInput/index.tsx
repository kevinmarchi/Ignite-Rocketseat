import { PlusCircle } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { TaskContext } from "../../../../contexts/TaskContext";
import { Container, ErrorMessage } from "./styles";

interface TaskProps {
    description: string;
}

export function TaskInput() {
    const {tasks, setTasks} = useContext(TaskContext)
    const {register, handleSubmit, formState: {errors}, reset} = useForm<TaskProps>({
        defaultValues: {
            description: '',
        }
    });

    function handleCreateNewTask(data : TaskProps) {
        const newTask = {
            id: new Date().toISOString(),
            description: data.description,
            complete: false,
        }

        setTasks([...tasks, newTask])
        reset()
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