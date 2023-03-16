import { createContext, ReactNode, useEffect, useState } from "react";

interface Task {
    id: string;
    description: string;
    complete: boolean;
}

interface TaskProviderProps {
    children: ReactNode;
}

interface TaskContextType {
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

export const TaskContext = createContext({} as TaskContextType)

export function TaskProvider({children} : TaskProviderProps) {
    const [tasks, setTasks] = useState<Task[]>([])

    //Carregar as Tasks caso possuir algo no localStorage
    useEffect(() => {
        const tasksJson = localStorage.getItem('@07-todo-list:tasks-1.0.0')

        if (!tasksJson) {
            return
        }
        
        const tasksLocalStorage = JSON.parse(tasksJson)
        setTasks(tasksLocalStorage)
    }, [])

    //Atualizar as tasks no localStorage
    useEffect(() => {
        if (tasks.length === 0) {
            return
        }
        const tasksJson = JSON.stringify(tasks)

        localStorage.setItem('@07-todo-list:tasks-1.0.0', tasksJson)
    }, [tasks])

    return (
        <TaskContext.Provider value={{tasks, setTasks}}>
            {children}
        </TaskContext.Provider>
    )
}