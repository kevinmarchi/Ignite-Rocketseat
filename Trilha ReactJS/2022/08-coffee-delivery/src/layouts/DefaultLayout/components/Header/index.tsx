import { ButtonContainer, Cart, Container, Location, MainContainer } from "./styles";
import logoImg from '../../../../assets/logo.png'
import { MapPin, ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";

export function Header() {
    return (
        <MainContainer>
            <Container>
                <Link to="/"><img src={logoImg} alt="" /></Link>
                <ButtonContainer>
                    <Location><MapPin weight="fill" /> Rio do Sul, SC</Location>
                    <Cart to="/checkout"><ShoppingCart weight="fill" size={23} /></Cart>
                </ButtonContainer>
            </Container>
        </MainContainer>
    )
}