import { Minus, Plus, Trash } from "phosphor-react";
import { useContext, useState } from "react";
import { CardItem, ShopContext } from "../../../../contexts/ShopContext";
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
    const getAssetSrc = (name: string) => {
        const path = `/src/assets/${name}`;
        const modules = import.meta.glob("/src/assets/*", { eager: true });
        const mod = modules[path] as { default: string };
        return mod.default;
    };
    const {card, setCard} = useContext(ShopContext)

    function handleRemoveItemCard(itemCard: CardItem) {
        const newCards = card.filter((value) => {
            return value.id !== itemCard.id
        }) 

        setCard(newCards)
    }

    function handleAlterAmountItem(itemCard : CardItem, amount : number) {
        const newCards = card.map((cardItem) => {
            if (cardItem.id === itemCard.id) {
                cardItem.amount = amount
            }
            return cardItem
        })

        setCard(newCards)
    }

    return (  
        <Container key={itemCard.id}>
            <CoffeeSelectedImageContainer>
                <img src={getAssetSrc(itemCard.image)} alt="" />
            </CoffeeSelectedImageContainer>
            <CoffeeSelectedContentContainer>
                <p>{itemCard.name}</p>
                <ButtonContainer>
                    <IncreaseInput>
                        <span onClick={() => itemCard.amount > 1 && handleAlterAmountItem(itemCard, (itemCard.amount - 1))}><Minus size={15} weight="bold" /></span>
                        <input type="number" value={itemCard.amount} disabled min={0} />
                        <span onClick={() => handleAlterAmountItem(itemCard, (itemCard.amount + 1))}><Plus size={15} weight="bold" /></span>
                    </IncreaseInput>
                    <span onClick={() => {handleRemoveItemCard(itemCard)}}><Trash />REMOVER</span>
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