import { Container } from "./styles";
import logoImg from '../../../../assets/logo.png'
import { Link } from "react-router-dom";

export function Header() {
    return (
        <Container>
            <Link to={"/"}><img src={logoImg} alt="" /></Link>
        </Container>
    )
}