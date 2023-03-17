import { useReactTable, getFacetedRowModel, getPaginationRowModel, ColumnDef, getCoreRowModel, flexRender } from "@tanstack/react-table"
import { useContext, useMemo } from "react";
import { TaskContext } from "../../../../../../contexts/TaskContext";
import { CheckboxContainer, TaskListTable, TaskText } from "./styles";
import * as Checkbox from '@radix-ui/react-checkbox';
import { Check } from "phosphor-react";

interface Task {
    id: string;
    description: string;
    complete: boolean;
}

export function Table(props: any) {

    const {tasks} = useContext(TaskContext);

    const columns = useMemo<ColumnDef<Task>[]>(() => {
        return [
            {
                header: 'teste',
                columns: [
                    {
                        accessorKey: 'complete',
                        cell: (task) => {
                            return (
                                <CheckboxContainer checked={task.getValue()} onCheckedChange={(checked) => props.props.handleCompleteTask(checked === true, task.row.original)}>
                                    <Checkbox.Indicator asChild>
                                        <Check />
                                    </Checkbox.Indicator>
                                </CheckboxContainer>
                            )
                        }
                    },
                    {
                        accessorKey: 'description',
                        cell: (task) => {
                            return (
                                <TaskText complete={task.row.original.complete}>{task.getValue()}</TaskText>
                            )
                        }
                    }
                ]
            }
        ]
    }, [])

    const table = useReactTable({
        data: tasks,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        debugTable: true,
    })

    return (
        <TaskListTable>
            <tbody>
                {
                    table.getRowModel().rows.map((row) => {
                        return (
                            <tr key={row.id}>
                                {row.getVisibleCells().map((cell) => {
                                    return (
                                        <td key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })
                }
            </tbody>
        </TaskListTable>
    )
}