import { Link } from "react-router-dom";
import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
`

export const Container = styled.div`
    padding: 1.5rem 0;
    width: 70%;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ButtonContainer = styled.div`
    display: flex;
    gap: 0.2rem;
`

export const Location = styled.span`
    background-color: ${props => props.theme["purple-light"]};
    border-radius: 7px;
    color: ${props => props.theme["purple-dark"]};
    padding: 0.5rem;

    display: flex;
    align-items: center;
    gap: 0.3rem;

    svg {
        color: ${props => props.theme["purple-dark"]};
        background-color: ${props => props.theme["purple-light"]};
    }
`

export const Cart = styled(Link)`
    all: unset;
    display: flex;
    border-radius: 7px;
    padding: 0.5rem;
    cursor: pointer;
    color: ${props => props.theme["yellow-dark"]};
    background-color: ${props => props.theme["yellow-light"]};

    svg {
        background-color: ${props => props.theme["yellow-light"]};
    }
`

export const CartContainer = styled.span`
    display: flex;
`

export const AmountCardItens = styled.span`
    position: absolute;
    background-color: ${props => props.theme["yellow-dark"]};
    color: ${props => props.theme.white};
    font-weight: bold;
    border-radius: 9999px;
    padding: 0.3rem;
    font-size: 0.6rem;
    margin-left: 2rem;
    margin-top: -5px;
`