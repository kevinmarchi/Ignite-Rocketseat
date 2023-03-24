import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useState, lazy } from 'react'
import { useForm } from 'react-hook-form'
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

    const {register, handleSubmit, formState: {errors}, reset, control} = useForm({
        defaultValues: {
            itemAmount: 1
        }
    })

    function handleAddItensCard(data: any) {
        console.log(data)
    }

    const [amount, setAmount]= useState(1)
    const image = `src/assets/${product.image}`
    
    return (
        <CardContainer>
            <CardHeader>
                <img src={image} alt="" />
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
                        <button onClick={() => setAmount(amount - 1)}><Minus size={20} weight="bold" /></button>
                        <input type="number" value={amount} disabled />
                        <button onClick={() => setAmount(amount + 1)}><Plus size={20} weight="bold" /></button>
                    </IncreaseInput>
                    <button type="submit"><ShoppingCart weight="fill" size={20} /></button>
                </form>
            </CardFooter>
        </CardContainer>
    )
}