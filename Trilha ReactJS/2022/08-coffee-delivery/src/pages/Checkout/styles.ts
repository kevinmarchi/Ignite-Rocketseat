import styled from "styled-components";
import * as RadioGroup from '@radix-ui/react-radio-group';

export const MainContainer = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
`

export const Container = styled.form`
    padding: 1.5rem 0;
    width: 70%;

    display: flex;
    flex-wrap: wrap;
    gap: 3rem;

    h4 {
        font-family: 'Baloo 2';
        font-size: 1.5rem;
        color: ${props => props.theme["base-subtitle"]};
    }
`

export const InformationContainer = styled.div`
    width: 60%;

    @media (max-width: 1300px) {
        width: 100%;
    }
`

export const InformationCard = styled.div`
    padding: 2rem;
    margin-top: 2rem;
    background-color: ${props => props.theme["base-card"]};
    border-radius: 7px;

    h5 {
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.25rem;
    }

    & > p {
        font-size: 0.8rem;
        text-indent: 25px;
        margin-bottom: 2rem;
    }

`

export const FormInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const FormRow = styled.div`
    input + input {
        margin-left: 1rem;
    }

    @media (max-width: 800px) {
        input + input {
            margin-left: 0;
            margin-top: 1rem;
        }   
    }

`

interface FormInputProps {
    width: string;
}

export const FormInput = styled.input<FormInputProps>`
    padding: 0.8rem;
    background-color: ${props => props.theme["base-input"]};
    border: solid 1px ${props => props.theme["base-button"]};
    color: ${props => props.theme["base-text"]};
    width: calc(${props => props.width});

    &:focus {
        box-shadow: 0 0 0 0;
        outline: 0;
        border: solid 1px ${props => props.theme["yellow-dark"]};
    }

    @media (max-width: 800px) {
        width: 100%;
    }
`

export const RadioGroupMain = styled(RadioGroup.Root)`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;

    button {
        all: unset;
        font-size: 0.75rem;
        padding: 1rem;
        background-color: ${props => props.theme["base-button"]};
        border: solid 1px ${props => props.theme["base-button"]};
        border-radius: 10px;
        color: ${props => props.theme["base-text"]};
        width: 10rem;
        cursor: pointer;

        display: flex;
        gap: 0.5rem;

        svg {
            color: ${props => props.theme.purple};
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    button:hover {
        background-color: ${props => props.theme["base-hover"]};
        border: solid 1px ${props => props.theme["base-hover"]};
        color: ${props => props.theme["base-subtitle"]};
    }

    button[aria-checked=true] {
        background-color: ${props => props.theme["purple-light"]};
        border-color: ${props => props.theme.purple};
    }
`

export const CoffeeSelectedContainer = styled.div`
    width: calc(40% - 3rem);

    @media (max-width: 1300px) {
        width: 100%;
    }
`

export const ConfirmCard = styled.div`
    border-top-right-radius: 40px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 10px;

    padding: 2rem;
    margin-top: 2rem;
    background-color: ${props => props.theme["base-card"]};

    h5 {
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.25rem;
    }

    & > p {
        font-size: 0.8rem;
        text-indent: 25px;
        margin-bottom: 2rem;
    }
`

export const CoffeeSelected = styled.div`
    display: flex;
    flex-wrap: wrap;    

    @media (max-width: 480px) {
        justify-content: center;
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

    & > button {
        all: unset;
        padding: 0.5rem;
        font-size: 0.75rem;
        border-radius: 7px;
        background-color: ${props => props.theme["base-button"]};
        color: ${props => props.theme["base-text"]};
        cursor: pointer;
        display: flex;
        gap: 0.1rem;

        svg {
            display: flex;
            justify-content: center;
            align-items: center;
            color: ${props => props.theme.purple};
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
    
    button {
        all: unset;
        color: ${props => props.theme.purple};
        font-size: 1.5rem;
        box-sizing: border-box;

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

export const TotalizersContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    grid-gap: 1rem;
    margin-top: 3rem;

    color: ${props => props.theme["base-text"]};

    span {
        font-size: 0.8rem;
    }

    p + p {
        text-align: right;
    }

    span + span {
        text-align: right;
    }

    h4 + h4 {
        text-align: right;
    }

    @media (max-width: 370px) {
        h4 {
            font-size: 1.3rem;
        }
    }
`

export const ConfirmButton = styled.button`
    all: unset;
    box-sizing: border-box;
    margin-top: 2rem;
    display: block;
    width: 100%;
    padding: 1rem;
    border-radius: 10px;
    text-align: center;
    background-color: ${props => props.theme["yellow"]};
    color: ${props => props.theme["white"]};
    cursor: pointer;
    transition: 0.2s background-color;

    &:hover {
        background-color: ${props => props.theme["yellow-dark"]};
    }
    
`

export const ErrorMessage = styled.p`
    font-size: 0.7rem;
    color: red;
`
