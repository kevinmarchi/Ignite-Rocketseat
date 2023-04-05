import { AmountCardItens, ButtonContainer, Cart, CartContainer, Container, Location, MainContainer } from "./styles";
import logoImg from '../../../../assets/logo.png'
import { MapPin, ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../../../../contexts/ShopContext";

export function Header() {

    const {card} = useContext(ShopContext)

    return (
        <MainContainer>
            <Container>
                <Link to="/"><img src={logoImg} alt="" /></Link>
                <ButtonContainer>
                    <Location><MapPin weight="fill" /> Rio do Sul, SC</Location>
                    <CartContainer>
                        <Cart to="/checkout"><ShoppingCart weight="fill" size={23} /></Cart>
                        <AmountCardItens>{card.length}</AmountCardItens>
                    </CartContainer>
                </ButtonContainer>
            </Container>
        </MainContainer>
    )
}