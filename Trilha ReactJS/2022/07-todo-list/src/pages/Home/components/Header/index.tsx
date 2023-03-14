import { Container } from "./styles";
import logoImg from '../../../../assets/todo-logo.png'

export function Header() {
    return (
        <Container>
            <img src={logoImg} alt="" />
        </Container>
    )
}