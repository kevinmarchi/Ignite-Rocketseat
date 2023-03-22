import { Container, ContainerImage, ContentContainer, ImageContainer, VantageIconBox, VantageItem, VantageItems } from "./styles";
import coffeeMainImg from '../../assets/coffee-main.png'
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

export function Home() {
    return (
        <ContainerImage>
            <Container>
                <ContentContainer>
                    <h2>Encontre o café perfeito para qualquer hora do dia</h2>
                    <h4>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h4>

                    <VantageItems>
                        <VantageItem>
                            <VantageIconBox bgcolor={"yellow-dark"}>
                                <ShoppingCart weight="fill" />
                            </VantageIconBox>
                            <p>Compra simples e segura</p>
                        </VantageItem>
                        <VantageItem>
                            <VantageIconBox bgcolor={"base-text"}>
                                <Timer weight="fill" />
                            </VantageIconBox>
                            <p>Embalagem mantém o café intacto</p>
                        </VantageItem>
                        <VantageItem>
                            <VantageIconBox bgcolor={"yellow"}>
                                <Package weight="fill" />
                            </VantageIconBox>
                            <p>Entrega rápida e rastreada</p>
                        </VantageItem>
                        <VantageItem>
                            <VantageIconBox bgcolor={"purple"}>
                                <Coffee weight="fill" />
                            </VantageIconBox>
                            <p>O café chega fresquinho até você</p>
                        </VantageItem>
                    </VantageItems>
                </ContentContainer>

                <ImageContainer>
                    <img src={coffeeMainImg} alt="" />
                </ImageContainer>
            </Container>
        </ContainerImage>
    )
}