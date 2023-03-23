import styled from "styled-components";
import backgroundImg from '../../assets/background.png'

export const ContainerImage = styled.div`
    background-image: linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.8)), url(${backgroundImg});
`

export const Container = styled.div`
    padding: 1.5rem 25rem;
    backdrop-filter: blur(1rem);

    display: flex;
`

export const ContentContainer = styled.div`
    width: 60%;

    h1 {
        font-family: 'Baloo 2';
        font-weight: 800;
        font-size: 3rem;
        line-height: 4rem;
        color: ${props => props.theme["base-title"]};
    };

    h4 {
        font-weight: normal;
        font-size: 1.25rem;
        line-height: 1.6rem;
        color: ${props => props.theme["base-subtitle"]};
    }
`

export const VantageItems = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 2rem;
    color: ${props => props.theme["base-text"]};
    gap: 1rem;
`

export const VantageItem = styled.div`
    display: flex;
    gap: 0.5rem;

    p {
        align-self: center;
    };
`

interface VantageIconProps {
    bgcolor: 'yellow-dark' | 'base-text' | 'yellow' | 'purple';
}

export const VantageIconBox = styled.div<VantageIconProps>`
    padding: 0.5rem;
    border-radius: 9999px;
    background-color: ${props => props.theme[props.bgcolor]};
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        color: ${props => props.theme.white};
    }
`

export const CatalogContainer = styled.div`
    padding: 1.5rem 25rem;

    h2 {
        color: ${props => props.theme["base-subtitle"]};
        margin-bottom: 2rem;
        font-family: 'Baloo 2';
        font-size: 2rem;
    }
`

export const Card = styled.div`
    background-color: ${props => props.theme["base-card"]};
    padding: 1rem;
    border-top-right-radius: 40px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 10px;
    width: 16rem;

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
        font-size: 1.4rem;
    }

    p {
        color: ${props => props.theme["base-label"]};
        text-indent: 15px;
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
    
    span {
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
