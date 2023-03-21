import styled from "styled-components";

export const Container = styled.div`
    padding: 1.5rem 10rem;

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

export const Cart = styled.button`
    display: flex;
    all: unset;
    border-radius: 7px;
    padding: 0.5rem;
    cursor: pointer;
    color: ${props => props.theme["yellow-dark"]};
    background-color: ${props => props.theme["yellow-light"]};

    svg {
        background-color: ${props => props.theme["yellow-light"]};
    }
`