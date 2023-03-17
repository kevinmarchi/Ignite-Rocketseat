import { Check, ClipboardText, Trash } from "phosphor-react";
import { useContext, useState } from "react";
import { CheckboxContainer, Container, TaskCounter, TaskListEmpty, TaskListTable, TaskProgress, TaskText, TrashButton } from "./styles";
import * as Checkbox from '@radix-ui/react-checkbox';
import { TaskContext } from "../../../../contexts/TaskContext";
import { Table } from "./components/Table";

export function Tasks() {
    const {tasks, setTasks} = useContext(TaskContext);

    function handleDeleteTask(taskToDelete : any) {
        const tasksWithoutDeleted = tasks.filter((task) => {
            return task !== taskToDelete
        })
        setTasks(tasksWithoutDeleted)
    }

    function handleCompleteTask(checked : boolean, taskToUpdate: any) {
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
                    <Table props={{handleCompleteTask, handleDeleteTask, countTasks}} />
                    // <TaskListTable>
                    //     <tbody>
                    //         {tasks.map((task) => {
                    //             return (
                    //                 <tr key={task.id}>
                    //                     <td width={"20px"}>
                                            // <CheckboxContainer checked={task.complete} onCheckedChange={(checked) => handleCompleteTask(checked === true, task)}>
                                            //     <Checkbox.Indicator asChild>
                                            //         <Check />
                                            //     </Checkbox.Indicator>
                                            // </CheckboxContainer>
                    //                     </td>
                    //                     <td><TaskText complete={task.complete}>{task.description}</TaskText></td>
                    //                     <td width={"20px"}>
                    //                         <TrashButton onClick={() => handleDeleteTask(task)}><Trash /></TrashButton>
                    //                     </td>
                    //                 </tr>
                    //             )
                    //         })}
                    //     </tbody>
                    // </TaskListTable>
            }
        </Container>
    )
}