import { Container, Content } from "./styles"

export function NotFound() {
    return (
        <Container>
            <Content>
                <h1>404 - Page not found</h1>
                <p>Make sure the URL is correct.</p>
            </Content>
        </Container>
    )
}