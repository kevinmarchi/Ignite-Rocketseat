import { createContext, ReactNode, useState } from "react";

interface CardItem {
    id: number;
    tags: Array<string>;
    name: string;
    description: string;
    price: number;
    image: string;
    amount: number;
}

interface ShopProviderProps {
    children: ReactNode;
}

interface ShopContextType {
    card: CardItem[];
    setCard: React.Dispatch<React.SetStateAction<CardItem[]>>
}

export const ShopContext = createContext({} as ShopContextType)

export function ShopProvider({children} : ShopProviderProps) {

    const [card, setCard] = useState<CardItem[]>([])

    return (
        <ShopContext.Provider value={{card, setCard}}>
            {children}
        </ShopContext.Provider>
    )
}