import { Check, ClipboardText, Trash } from "phosphor-react";
import { useState } from "react";
import { Container, TaskCounter, TaskListEmpty, TaskListTable, TaskProgress } from "./styles";
import * as Checkbox from '@radix-ui/react-checkbox';

interface Task {
    name: string;
    state: 'progress' | 'concluded';
}

export function Tasks() {
    const [tasks, setTasks] = useState<Task[]>([]);

    const [checked, setChecked] = useState(false);

    console.log(checked);

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
                tasks.length !== 0 ?
                    <TaskListEmpty>
                        <ClipboardText size={56} />
                        <h4>Você ainda não tem tarefas cadastradas</h4>
                        <p>Crie tarefas e organize seus itens a fazer</p>
                    </TaskListEmpty>
                :
                    <>
                        <form>
                            <TaskListTable>
                                <tbody>
                                    <tr>
                                        <td>
                                            <Checkbox.Root checked={checked} onCheckedChange={(checked) => setChecked(checked)}>
                                                <Checkbox.Indicator asChild>
                                                    <p>Teste1</p>
                                                </Checkbox.Indicator>
                                                {checked === false && <p>Teste2</p>}
                                            </Checkbox.Root>
                                        </td>
                                        <td width={"80%"}>Teste</td>
                                        <td>
                                            <button><Trash /></button>
                                        </td>
                                    </tr>
                                </tbody>
                            </TaskListTable>
                        </form>
                    </>
            }
        </Container>
    )
}