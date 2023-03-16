import { TaskProvider } from "../../contexts/TaskContext";
import { Header } from "./components/Header";
import { TaskInput } from "./components/TaskInput";
import { Tasks } from "./components/Tasks";
import { Container, ContentContainer } from "./styles";

export function Home() {
    return (
        <Container>
            <Header></Header>
            <TaskProvider>
                <ContentContainer>
                    <TaskInput></TaskInput>
                    <Tasks></Tasks>
                </ContentContainer>
            </TaskProvider>
        </Container>        
    )
}