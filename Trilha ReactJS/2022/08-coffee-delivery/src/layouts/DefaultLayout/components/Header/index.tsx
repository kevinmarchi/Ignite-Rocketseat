import { ButtonContainer, Cart, Container, Location, MainContainer } from "./styles";
import logoImg from '../../../../assets/logo.png'
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header() {
    return (
        <MainContainer>
            <Container>
                <img src={logoImg} alt="" />
                <ButtonContainer>
                    <Location><MapPin weight="fill" /> Rio do Sul, SC</Location>
                    <Cart><ShoppingCart weight="fill" size={23} /></Cart>
                </ButtonContainer>
            </Container>
        </MainContainer>
    )
}