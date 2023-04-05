import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useState, lazy, useEffect, useContext } from 'react'
import { useForm } from 'react-hook-form'
import { ShopContext } from '../../../../contexts/ShopContext'
import { CardContent, CardFooter, CardHeader, IncreaseInput, CardContainer, TagContainer } from './styles'

interface CardProps {
    product: {
        id: number;
        tags: Array<string>;
        name: string;
        description: string;
        price: number;
        image: string;
    }
}

export function Card({product}: CardProps) {

    const {register, handleSubmit} = useForm()

    const {card, setCard} = useContext(ShopContext)

    
    function handleAddItensCard(data: any) {
        const itemCard = {...data, amount: amount}
        let registerExists = false

        setCard(card.map((item) => {
            if (item.id === itemCard.id) {
                item.amount += itemCard.amount
                registerExists = true
            }
            return item
        }))

        if (!registerExists) {
            setCard([...card, itemCard])
        }

        setAmount(1)
    }

    const [amount, setAmount]= useState(1)

    const getAssetSrc = (name: string) => {
        const path = `/src/assets/${name}`;
        const modules = import.meta.glob("/src/assets/*", { eager: true });
        const mod = modules[path] as { default: string };
        return mod.default;
    };
    
    return (
        <CardContainer>
            <CardHeader>
                <img src={getAssetSrc(product.image)} alt="" />
                <TagContainer>
                    {product.tags.map((tag) => {
                        return (
                            <span key={tag}>{tag}</span>
                        )
                    })}
                </TagContainer>
            </CardHeader>
            <CardContent>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
            </CardContent>
            <CardFooter>
                <p>R$ &nbsp;
                    <span>
                        {new Intl.NumberFormat('pt-BR', {
                            style: 'decimal',
                            currency: 'BRL',
                            minimumFractionDigits: 2
                        }).format(product.price)}
                    </span>
                </p>
                <form onSubmit={handleSubmit(handleAddItensCard)}>
                    <IncreaseInput>
                        <input type="hidden" defaultValue={product.id} {...register("id")} />
                        <input type="hidden" defaultValue={product.tags} {...register("tags")} />
                        <input type="hidden" defaultValue={product.name} {...register("name")} />
                        <input type="hidden" defaultValue={product.description} {...register("description")} />
                        <input type="hidden" defaultValue={product.price} {...register("price")} />
                        <input type="hidden" defaultValue={product.image} {...register("image")} />
                        <span onClick={() => amount > 1 && setAmount(amount - 1)}><Minus size={20} weight="bold" /></span>
                        <input type="text" value={amount} onChange={() => {setAmount(amount)}} />
                        <span onClick={() => setAmount(amount + 1)}><Plus size={20} weight="bold" /></span>
                    </IncreaseInput>
                    <button type="submit"><ShoppingCart weight="fill" size={20} /></button>
                </form>
            </CardFooter>
        </CardContainer>
    )
}