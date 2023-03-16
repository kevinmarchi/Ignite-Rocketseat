import { createContext, ReactNode, useState } from "react";

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

    return (
        <TaskContext.Provider value={{tasks, setTasks}}>
            {children}
        </TaskContext.Provider>
    )
}