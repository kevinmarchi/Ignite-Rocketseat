import { Outlet } from "react-router-dom";
import { Container, ContentContainer, MainContainer } from "./styles";
import { Header } from "./components/Header";

export function DefaultLayout() {
    return (
        <MainContainer>
            <Header></Header>
            <Container>
                <ContentContainer>
                    <Outlet />
                </ContentContainer>
            </Container>
        </MainContainer>
    )
}