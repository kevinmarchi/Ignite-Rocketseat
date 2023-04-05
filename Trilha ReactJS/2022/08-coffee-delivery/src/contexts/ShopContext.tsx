import { createContext, ReactNode, useState } from "react";

export interface CardItem {
    id: number;
    tags: Array<string>;
    name: string;
    description: string;
    price: number;
    image: string;
    amount: number;
}

interface OrderInformation {
    cep: string;
    rua: string;
    numero: number;
    complemento: string;
    bairro: string;
    cidade: string;
    uf: string;
    pagamento: string;
}

interface ShopProviderProps {
    children: ReactNode;
}

interface ShopContextType {
    card: CardItem[];
    setCard: React.Dispatch<React.SetStateAction<CardItem[]>>
    orderInformation: OrderInformation;
    setOrderInformation: React.Dispatch<React.SetStateAction<OrderInformation>>
}

export const ShopContext = createContext({} as ShopContextType)

export function ShopProvider({children} : ShopProviderProps) {

    const [card, setCard] = useState<CardItem[]>([])
    const [orderInformation, setOrderInformation] = useState<OrderInformation>({} as OrderInformation)

    return (
        <ShopContext.Provider value={{card, setCard, orderInformation, setOrderInformation}}>
            {children}
        </ShopContext.Provider>
    )
}