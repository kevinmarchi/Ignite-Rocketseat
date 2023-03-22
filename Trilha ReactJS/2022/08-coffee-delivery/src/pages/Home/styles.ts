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

    h2 {
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

export const ImageContainer = styled.div`

`
