import styled from "styled-components";
import * as RadioGroup from '@radix-ui/react-radio-group';

export const MainContainer = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
`

export const Container = styled.div`
    padding: 1.5rem 0;
    width: 70%;

    display: flex;

    h4 {
        font-family: 'Baloo 2';
        color: ${props => props.theme["base-subtitle"]};
    }
`

export const InformationContainer = styled.div`
    border-radius: 7px;
`

export const InformationCard = styled.div`
    padding: 2rem;
    margin-top: 2rem;
    background-color: ${props => props.theme["base-card"]};

    h5 {
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.25rem;
    }

    p {
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

`

interface FormInputProps {
    width: string;
}

export const FormInput = styled.input<FormInputProps>`
    padding: 0.8rem;
    background-color: ${props => props.theme["base-input"]};
    border: solid 1px ${props => props.theme["base-button"]};
    width: calc(${props => props.width});
`

export const RadioGroupMain = styled(RadioGroup.Root)`
    display: flex;
    gap: 1rem;

    button {
        all: unset;
        font-size: 0.75rem;
        padding: 1rem;
        background-color: ${props => props.theme["base-button"]};
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
`


