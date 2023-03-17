import { ClipboardText } from "phosphor-react";
import { useContext, useEffect } from "react";
import { Container, TaskCounter, TaskListEmpty, TaskProgress } from "./styles";
import { TaskContext } from "../../../../contexts/TaskContext";
import { Table } from "./components/Table";

interface Task {
    id: string;
    description: string;
    complete: boolean;
}

export function Tasks() {
    const {tasks, setTasks} = useContext(TaskContext);

    function handleDeleteTask(taskToDelete : Task) {

        const tasksWithoutDeleted = tasks.filter((task) => {
            return task.id !== taskToDelete.id
        })
        setTasks(tasksWithoutDeleted)
    }

    function handleCompleteTask(checked : boolean, taskToUpdate: Task) {
        setTasks(tasks.map((task) => {
            if (task.id === taskToUpdate.id) {
                task.complete = checked
            }
            return task
        }))
    }

    function countTasks() {
        let counterCreated = 0
        let counterCompleted = 0
        tasks.map((task) => {
            task.complete === false ? counterCreated++ : counterCompleted++
            return {counterCreated, counterCompleted}
        })
        const counterCreatedFormated = String(counterCreated).padStart(2, '0')
        const counterCompletedFormated = String(counterCompleted).padStart(2, '0')
        return {counterCreatedFormated, counterCompletedFormated}
    }

    return (
        <Container>
            <TaskProgress>
                <TaskCounter color={"blue"}>
                    Tarefas Criadas &nbsp;
                    <input type="text" disabled value={countTasks().counterCreatedFormated}/>
                </TaskCounter>

                <TaskCounter color={"purple"}>
                    Concluídas &nbsp;
                    <input type="text" disabled value={countTasks().counterCompletedFormated}/>
                </TaskCounter>
            </TaskProgress>

            {
                tasks.length === 0 ?
                    <TaskListEmpty>
                        <ClipboardText size={56} />
                        <h4>Você ainda não tem tarefas cadastradas</h4>
                        <p>Crie tarefas e organize seus itens a fazer</p>
                    </TaskListEmpty>
                :
                    <Table {...{handleCompleteTask, handleDeleteTask}}  />
            }
        </Container>
    )
}