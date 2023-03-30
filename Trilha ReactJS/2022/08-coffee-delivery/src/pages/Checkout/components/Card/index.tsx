import { Minus, Plus, Trash } from "phosphor-react";
import { useState } from "react";
import { ButtonContainer, CoffeeSelectedContentContainer, CoffeeSelectedImageContainer, CoffeeSelectedTotalizerContainer, Container, IncreaseInput } from "./styles";

interface ItemCardProps {
    itemCard: {
        id: number;
        tags: Array<string>;
        name: string;
        description: string;
        price: number;
        image: string;
        amount: number;
    }
}

export function Card({itemCard}: ItemCardProps) {
    const [amount, setAmount] = useState(itemCard.amount)
    const image = `src/assets/${itemCard.image}`

    return (  
        <Container key={itemCard.id}>
            <CoffeeSelectedImageContainer>
                <img src={image} alt="" />
            </CoffeeSelectedImageContainer>
            <CoffeeSelectedContentContainer>
                <p>{itemCard.name}</p>
                <ButtonContainer>
                    <IncreaseInput>
                        <button onClick={() => setAmount(amount - 1)}><Minus size={15} weight="bold" /></button>
                        <input type="number" value={amount} disabled />
                        <button onClick={() => setAmount(amount + 1)}><Plus size={15} weight="bold" /></button>
                    </IncreaseInput>
                    <button><Trash />REMOVER</button>
                </ButtonContainer>
            </CoffeeSelectedContentContainer>
            <CoffeeSelectedTotalizerContainer>
                <h5>
                    R$ &nbsp;
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'decimal',
                        currency: 'BRL',
                        minimumFractionDigits: 2
                    }).format(itemCard.price)}
                </h5>
            </CoffeeSelectedTotalizerContainer>
        </Container>         
    )
}