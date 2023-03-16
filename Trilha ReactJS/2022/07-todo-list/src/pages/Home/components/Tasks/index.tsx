import { Check, ClipboardText, Trash } from "phosphor-react";
import { useContext, useState } from "react";
import { CheckboxContainer, Container, TaskCounter, TaskListEmpty, TaskListTable, TaskProgress, TaskText, TrashButton } from "./styles";
import * as Checkbox from '@radix-ui/react-checkbox';
import { TaskContext } from "../../../../contexts/TaskContext";

export function Tasks() {
    const {tasks, setTasks} = useContext(TaskContext);

    return (
        <Container>
            <TaskProgress>
                <TaskCounter color={"blue"}>
                    Tarefas Criadas &nbsp;
                    <input type="text" disabled value={"00"}/>
                </TaskCounter>

                <TaskCounter color={"purple"}>
                    Concluídas &nbsp;
                    <input type="text" disabled value={"00"}/>
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
                    <TaskListTable>
                        <tbody>
                            {tasks.map((task) => {

                                function handleDeleteTask() {
                                    const taskToDelete = task

                                    const tasksWithoutDeleted = tasks.filter((task) => {
                                        return task !== taskToDelete
                                    })
                                    setTasks(tasksWithoutDeleted)
                                }

                                function handleCompleteTask(checked : boolean) {
                                    const taskToUpdate = task

                                    console.log(taskToUpdate)
                                }

                                return (
                                    <tr key={task.id}>
                                        <td width={"20px"}>
                                            <CheckboxContainer checked={task.complete} onCheckedChange={(checked) => handleCompleteTask(checked === true)}>
                                                <Checkbox.Indicator asChild>
                                                    <Check />
                                                </Checkbox.Indicator>
                                            </CheckboxContainer>
                                        </td>
                                        <td><TaskText complete={task.complete}>{task.description}</TaskText></td>
                                        <td width={"20px"}>
                                            <TrashButton onClick={handleDeleteTask}><Trash /></TrashButton>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </TaskListTable>
            }
        </Container>
    )
}