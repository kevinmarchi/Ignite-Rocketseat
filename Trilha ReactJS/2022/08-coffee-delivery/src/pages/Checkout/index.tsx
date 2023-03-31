import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { CoffeeSelected, CoffeeSelectedContainer, ConfirmButton, ConfirmCard, Container, ErrorMessage, FormInput, FormInputContainer, FormRow, InformationCard, InformationContainer, MainContainer, RadioGroupMain, TotalizersContainer } from "./styles";
import { defaultTheme } from "../../styles/themes/default";
import { Controller, useForm } from "react-hook-form";
import * as RadioGroup from '@radix-ui/react-radio-group';
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../contexts/ShopContext";
import { Card } from "./components/Card";
import { useNavigate } from "react-router-dom";

export function Checkout() {

    const {register, handleSubmit, control, formState: {errors}} = useForm()
    const {card, setOrderInformation} = useContext(ShopContext)
    const [totalItem, setTotalItem] = useState(0)
    const navigate = useNavigate()

    function handleCreateNewOrder(data: any) {
        setOrderInformation(data)
        navigate('/sucesso')
    }

    useEffect(() => {
        setTotalItem(card.reduce((acc, itemCard,) => {
            return acc + (itemCard.amount * itemCard.price)
        }, 0))
    }, [card])

    return (
        <MainContainer>
            <Container onSubmit={handleSubmit(handleCreateNewOrder)}>
                <InformationContainer>
                    <h4>Complete seu pedido</h4>
                    <InformationCard>
                        <h5><MapPinLine size={20} color={defaultTheme["yellow-dark"]}/> Endereço de Entrega</h5>
                        <p>Informe o endereço onde deseja receber seu pedido</p>
                        <FormInputContainer>
                            <FormRow>
                                <FormInput type="text" placeholder="CEP" width={"50%"} {...register('cep', {required:true})}/>
                                {errors.cep && <ErrorMessage>O campo CEP é de preenchimento obrigatório!!!</ErrorMessage>}
                            </FormRow>
                            <FormRow>
                                <FormInput type="text" placeholder="Rua" width={"100%"} {...register('rua', {required:true})}/>
                                {errors.rua && <ErrorMessage>O campo Rua é de preenchimento obrigatório!!!</ErrorMessage>}
                            </FormRow>
                            <FormRow>
                                <FormInput type="number" placeholder="Número" width={"30%"} {...register('numero', {required:true})} />
                                <FormInput type="text" placeholder="Complemento" width={"70% - 1rem"} {...register('complemento')} />
                                {errors.numero && <ErrorMessage>O campo Número é de preenchimento obrigatório!!!</ErrorMessage>}
                            </FormRow>

                            <FormRow>
                                <FormInput type="text" placeholder="Bairro" width={"30%"} {...register('bairro', {required:true})} />
                                <FormInput type="text" placeholder="Cidade" width={"50% - 1rem"} {...register('cidade', {required:true})} />
                                <FormInput type="text" placeholder="UF" width={"20% - 1rem"} {...register('uf', {required:true})} />
                                {errors.bairro && <ErrorMessage>O campo Bairro é de preenchimento obrigatório!!!</ErrorMessage>}
                                {errors.cidade && <ErrorMessage>O campo Cidade é de preenchimento obrigatório!!!</ErrorMessage>}
                                {errors.uf && <ErrorMessage>O campo UF é de preenchimento obrigatório!!!</ErrorMessage>}
                            </FormRow>
                        </FormInputContainer>
                    </InformationCard>
                    <InformationCard>
                        <h5> <CurrencyDollar size={20} color={defaultTheme.purple} /> Pagamento</h5>
                        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                        <FormInputContainer>
                            <Controller
                                control={control}
                                name='pagamento'
                                render={({field}) => {
                                    return (
                                        <RadioGroupMain onValueChange={field.onChange} value={field.value} defaultValue={"Dinheiro"}>
                                            <RadioGroup.Item value="Cartão de Crédito">
                                                <CreditCard size={15} />
                                                <span>Cartão de Crédito</span>
                                            </RadioGroup.Item>
                                            <RadioGroup.Item value="Cartão de Débito">
                                                <Bank size={15} />
                                                <span>Cartão de Débito</span>
                                            </RadioGroup.Item>
                                            <RadioGroup.Item value="Dinheiro">
                                                <Money size={15} />
                                                <span>Dinheiro</span>
                                            </RadioGroup.Item>
                                        </RadioGroupMain>
                                    )
                                }}
                            />
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