import { Header } from "./components/Header";
import { TaskInput } from "./components/TaskInput";
import { Tasks } from "./components/Tasks";
import { Container, ContentContainer } from "./styles";

export function Home() {
    return (
        <Container>
            <Header></Header>
            <ContentContainer>
                <TaskInput></TaskInput>
                <Tasks></Tasks>
            </ContentContainer>
        </Container>        
    )
}