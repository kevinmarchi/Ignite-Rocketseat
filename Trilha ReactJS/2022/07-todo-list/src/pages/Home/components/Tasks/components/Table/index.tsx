import { useReactTable, getPaginationRowModel, ColumnDef, getCoreRowModel, flexRender } from "@tanstack/react-table"
import { useContext, useMemo } from "react";
import { TaskContext } from "../../../../../../contexts/TaskContext";
import { CheckboxContainer, PaginationButton, PaginationButtonContainer, PaginationContainer, PaginationText, TaskListTable, TaskText, TrashButton } from "./styles";
import * as Checkbox from '@radix-ui/react-checkbox';
import { Check, Trash } from "phosphor-react";

interface Task {
    id: string;
    description: string;
    complete: boolean;
}

interface TableProps {
    handleCompleteTask: (checked: boolean, task:Task) => void;
    handleDeleteTask: (task:Task) => void;
}

export function Table({handleCompleteTask, handleDeleteTask}: TableProps) {
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
                                <CheckboxContainer checked={task.getValue()} onCheckedChange={(checked) => handleCompleteTask(checked === true, task.row.original)}>
                                    <Checkbox.Indicator asChild>
                                        <Check />
                                    </Checkbox.Indicator>
                                </CheckboxContainer>
                            )
                        },
                        size: "20px",
                    },
                    {
                        accessorKey: 'description',
                        cell: (task) => {
                            return (
                                <TaskText complete={task.row.original.complete}>{task.getValue()}</TaskText>
                            )
                        },
                        size: "auto",
                    },
                    {
                        accessorKey: 'id',
                        cell: (task) => {
                            return (
                                <TrashButton onClick={() => handleDeleteTask(task.row.original)}><Trash /></TrashButton>
                            )
                        },
                        size: "20px",
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
    })
    table.getState().pagination.pageSize = 8

    return (
        <>
            <TaskListTable>
                <tbody>
                    {
                        table.getRowModel().rows.map((row) => {
                            return (
                                <tr key={row.id}>
                                    {row.getVisibleCells().map((cell) => {
                                        return (
                                            <td {...{
                                                key: cell.id,
                                                style: {
                                                    width: cell.column.columnDef.size,
                                                }
                                            }}>
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
            <PaginationContainer>
                <PaginationButtonContainer>
                    <PaginationButton onClick={() => table.setPageIndex(0)} disabled={!table.getCanPreviousPage()}>
                        {'<<'}
                    </PaginationButton>
                    <PaginationButton onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
                        {'<'}
                    </PaginationButton>
                    <PaginationButton onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
                        {'>'}
                    </PaginationButton>
                    <PaginationButton onClick={() => table.setPageIndex(table.getPageCount() - 1)} disabled={!table.getCanNextPage()}>
                        {'>>'}
                    </PaginationButton>
                </PaginationButtonContainer>

                <PaginationText>
                    Página&nbsp;
                    <strong>
                        {table.getState().pagination.pageIndex + 1} de{' '}
                        {table.getPageCount()}
                    </strong>
                </PaginationText>
            </PaginationContainer>

        </>
    )
}