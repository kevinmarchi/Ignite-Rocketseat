import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { Container, ImageContainer, MainContainer, OrderContainer, OrderInfo, OrderInfoContainerBorder, OrderItem, VantageIconBox } from "./styles";
import deliveredImage from '../../assets/delivered.png'

export function Success() {
    return (
        <MainContainer>
            <Container>
                <h1>Uhu! Pedido Confirmado</h1>
                <p>Agora é só aguardar que logo o café chegará até você</p>

                <OrderContainer>
                    <OrderInfoContainerBorder>
                        <OrderInfo>
                            <OrderItem>
                                <VantageIconBox bgcolor={"purple"}>
                                    <MapPin weight="fill" />
                                </VantageIconBox>
                                <span>
                                    <p>Entrega em <b>Rua Severino Lenzi, 5958</b></p>
                                    <p>Canta Galo - Rio do Sul, SC</p>
                                </span>
                            </OrderItem>
                            <OrderItem>
                                <VantageIconBox bgcolor={"yellow"}>
                                    <Timer weight="fill" />
                                </VantageIconBox>
                                <span>
                                    <p>Previsão de entrega</p>
                                    <p><b>20 - 30 min</b></p>
                                </span>
                            </OrderItem>
                            <OrderItem>
                                <VantageIconBox bgcolor={"yellow-dark"}>
                                    <CurrencyDollar weight="fill" />
                                </VantageIconBox>
                                <span>
                                    <p>Pagamento na entrega</p>
                                    <p><b>Cartão de Crédito</b></p>
                                </span>
                            </OrderItem>
                        </OrderInfo>
                    </OrderInfoContainerBorder>
                    <ImageContainer>
                        <img src={deliveredImage} alt="" />
                    </ImageContainer>
                </OrderContainer>
            </Container>
        </MainContainer>
    )
}