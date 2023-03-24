import styled from "styled-components"

export const CardContainer = styled.div`
    background-color: ${props => props.theme["base-card"]};
    padding: 1rem;
    border-top-right-radius: 40px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 10px;
    width: 17rem;

    display: flex;
    flex-direction: column;
`

export const CardHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    img {
        width: 7.5rem;
        height: 7.5rem;
        margin-top: -2rem;
    }
`

export const TagContainer = styled.div`
    display: flex;
    gap: 0.5rem;

    span {
        background-color: ${props => props.theme["yellow-light"]};
        color: ${props => props.theme["yellow-dark"]};
        border-radius: 40px;
        padding: 0.5rem;
        font-weight: bold;
        font-size: 0.8rem;
    }
`

export const CardContent = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
    gap: 0.5rem;

    h3 {
        font-family: 'Baloo 2';
        color: ${props => props.theme["base-subtitle"]};
        font-size: 1.5rem;
    }

    p {
        color: ${props => props.theme["base-label"]};
        text-align: center;
    }
`

export const CardFooter = styled.div`
    display: flex;
    justify-content: space-between;

    p {
        color: ${props => props.theme["base-label"]};

        span {
            color: ${props => props.theme["base-subtitle"]};
            font-family: 'Baloo 2';
            font-weight: bold;
            font-size: 1.5rem;
        }
    }

    form {
        display: flex;
        gap: 0.5rem;
        
        & > input {
            width: 3rem;
        }

        & > button {
            all: unset;
            border-radius: 7px;
            padding: 0.5rem;
            cursor: pointer;
            color: ${props => props.theme["white"]};
            background-color: ${props => props.theme["purple-dark"]};
            display: flex;
            justify-content: center;
            align-items: center;

            svg {
                background-color: ${props => props.theme["purple-dark"]};
            }
        }
    }
`

export const IncreaseInput = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme["base-button"]};
    border-radius: 10px;
    padding: 0.3rem;
    
    button {
        all: unset;
        color: ${props => props.theme.purple};
        font-size: 1.5rem;

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