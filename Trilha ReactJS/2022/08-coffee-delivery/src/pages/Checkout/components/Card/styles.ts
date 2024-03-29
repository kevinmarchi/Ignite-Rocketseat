import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    width: 100%;

    border-bottom: solid 1px ${props => props.theme["base-button"]};
    padding-bottom: 1rem;
    margin-bottom: 2em;

    @media (max-width: 480px) {
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
    }
`

export const CoffeeSelectedImageContainer = styled.div`
    margin-top: -0.5rem;
    width: 80px;
    img {
        width: 4rem;
        height: 4rem;
    }
`

export const CoffeeSelectedContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    width: calc(100% - (75px + 80px));

    @media (max-width: 480px) {
        width: auto;
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    gap: 0.2rem;

    & > span {
        all: unset;
        padding: 0.5rem;
        font-size: 0.75rem;
        border-radius: 7px;
        background-color: ${props => props.theme["base-button"]};
        color: ${props => props.theme["base-text"]};
        cursor: pointer;
        display: flex;
        gap: 0.1rem;
        transition: 0.2s background-color;

        svg {
            display: flex;
            justify-content: center;
            align-items: center;
            color: ${props => props.theme.purple};
        }
    }

    & > span:hover {
        background-color: ${props => props.theme["base-hover"]};
        color: ${props => props.theme["base-subtitle"]};

        svg {
            color: ${props => props.theme["purple-dark"]};
        }
    }
`

export const IncreaseInput = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme["base-button"]};
    border-radius: 7px;
    padding: 0.3rem;
    
    span {
        all: unset;
        color: ${props => props.theme.purple};
        font-size: 1.5rem;
        box-sizing: border-box;
        cursor: pointer;

        svg {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    input {
        all: unset;
        text-align: center;
        width: 40px;
    }

    input[type='number']::-webkit-inner-spin-button, input[type='number']::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

`

export const CoffeeSelectedTotalizerContainer = styled.div`
    width: 75px;
    h5 {
        font-weight: bold;
        float: right;
    }

    @media (max-width: 480px) {
        h5 {
            margin-top: 0.5rem;
            float: left;
        }
    }
`