import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { CoffeeSelected, CoffeeSelectedContainer, ConfirmButton, ConfirmCard, Container, FormInput, FormInputContainer, FormRow, InformationCard, InformationContainer, MainContainer, RadioGroupMain, TotalizersContainer } from "./styles";
import { defaultTheme } from "../../styles/themes/default";
import { useForm } from "react-hook-form";
import * as RadioGroup from '@radix-ui/react-radio-group';
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../contexts/ShopContext";
import { Card } from "./components/Card";

export function Checkout() {

    const {register, handleSubmit} = useForm()
    const {card} = useContext(ShopContext)
    const [totalItem, setTotalItem] = useState(0)

    function handleCreateNewOrder(data: any) {
        console.log(data);
    }

    useEffect(() => {
        setTotalItem(card.reduce((acc, itemCard,) => {
            return acc + (itemCard.amount * itemCard.price)
        }, 0))
    }, [card])

    return (
        <MainContainer>
            <Container>
                <InformationContainer>
                    <h4>Complete seu pedido</h4>
                    <InformationCard>
                        <h5><MapPinLine size={20} color={defaultTheme["yellow-dark"]}/> Endereço de Entrega</h5>
                        <p>Informe o endereço onde deseja receber seu pedido</p>

                        <form onSubmit={handleSubmit(handleCreateNewOrder)}>
                            <FormInputContainer>
                                <FormRow>
                                    <FormInput type="text" placeholder="CEP" width={"50%"} />
                                </FormRow>
                                <FormRow>
                                    <FormInput type="text" placeholder="Rua" width={"100%"}/>
                                </FormRow>
                                <FormRow>
                                    <FormInput type="number" placeholder="Número" width={"30%"} />
                                    <FormInput type="text" placeholder="Complemento" width={"70% - 1rem"} />
                                </FormRow>

                                <FormRow>
                                    <FormInput type="text" placeholder="Bairro" width={"30%"} />
                                    <FormInput type="text" placeholder="Cidade" width={"50% - 1rem"} />
                                    <FormInput type="text" placeholder="UF" width={"20% - 1rem"} />
                                </FormRow>
                            </FormInputContainer>
                        </form>
                    </InformationCard>
                    <InformationCard>
                        <h5> <CurrencyDollar size={20} color={defaultTheme.purple} /> Pagamento</h5>
                        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                        <FormInputContainer>
                            <RadioGroupMain>
                                <RadioGroup.Item value="cartao-credito">
                                    <CreditCard size={15} />
                                    <span>Cartão de Crédito</span>
                                </RadioGroup.Item>
                                <RadioGroup.Item value="cartao-debito">
                                    <Bank size={15} />
                                    <span>Cartão de Débito</span>
                                </RadioGroup.Item>
                                <RadioGroup.Item value="dinheiro">
                                    <Money size={15} />
                                    <span>Dinheiro</span>
                                </RadioGroup.Item>
                            </RadioGroupMain>
                        </FormInputContainer>
                    </InformationCard>
                </InformationContainer>

                <CoffeeSelectedContainer>
                    <h4>Cafés selecionados</h4>
                    <ConfirmCard>
                        <CoffeeSelected>
                            {card.map(itemCard => {
                                return (
                                    <Card key={itemCard.id} itemCard={itemCard}></Card>
                                )
                            })}
                        </CoffeeSelected>
                        <TotalizersContainer>
                            <p>Total de Itens</p>
                            <p>R$ &nbsp;
                                {new Intl.NumberFormat('pt-BR', {
                                    style: 'decimal',
                                    currency: 'BRL',
                                    minimumFractionDigits: 2
                                }).format(totalItem)}
                            </p>
                            <span>Entrega</span>
                            <span>R$ 3,50</span>
                            <h4>Total</h4>
                            <h4>R$ &nbsp;
                                {new Intl.NumberFormat('pt-BR', {
                                    style: 'decimal',
                                    currency: 'BRL',
                                    minimumFractionDigits: 2
                                }).format(totalItem + 3.5)}
                            </h4>
                        </TotalizersContainer>
                        <ConfirmButton><b>CONFIRMAR PEDIDO</b></ConfirmButton>
                    </ConfirmCard>
                </CoffeeSelectedContainer>
            </Container>
        </MainContainer>
    )
}