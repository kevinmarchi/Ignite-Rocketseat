import { Card, CardContent, CardFooter, CardHeader, CatalogContainer, Container, ContainerImage, ContentContainer, IncreaseInput, VantageIconBox, VantageItem, VantageItems } from "./styles";
import coffeeMainImg from '../../assets/coffee-main.png'
import { Coffee, Minus, Package, Plus, ShoppingCart, Timer } from "phosphor-react";
import coffeeTradicional from '../../assets/coffee-expresso.png'
import { Controller, useForm } from "react-hook-form";

export function Home() {

    const {register, handleSubmit, formState: {errors}, reset, control} = useForm({
        defaultValues: {
            itemAmount: 1
        }
    })

    function handleAddItensCard(data: any) {
        console.log(data)
    }

    return (
        <>
            <ContainerImage>
                <Container>
                    <ContentContainer>
                        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
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

                    <img src={coffeeMainImg} alt="" />
                </Container>
            </ContainerImage>

            <CatalogContainer>
                <h2>Nossos cafés</h2>

                <Card>
                    <CardHeader>
                        <img src={coffeeTradicional} alt="" />
                        <span>TRADICIONAL</span>
                    </CardHeader>
                    <CardContent>
                        <h3>Expresso Tradicional</h3>
                        <p>O Tradicional café feito com água quente e grãos moídos</p>
                    </CardContent>
                    <CardFooter>
                        <p>R$ <span>9,90</span></p>
                        <form onSubmit={handleSubmit(handleAddItensCard)}>
                            <Controller 
                                control={control}
                                name="itemAmount"
                                render={
                                    ({field}) => {
                                        return (
                                            <IncreaseInput>
                                                <span onClick={() => field.onChange(field.value--)}><Minus size={20} weight="bold" /></span>
                                                <input type="number" value={field.value} name="itemAmount" />
                                                <span onClick={() => field.onChange(field.value++)}><Plus size={20} weight="bold" /></span>
                                            </IncreaseInput>
                                        )
                                    }
                                } 
                            />

                            
                            <button type="submit"><ShoppingCart weight="fill" size={20} /></button>
                        </form>
                    </CardFooter>
                </Card>

            </CatalogContainer>
        </>
        
    )
}