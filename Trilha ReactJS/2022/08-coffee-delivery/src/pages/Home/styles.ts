import styled from "styled-components";
import backgroundImg from '../../assets/background.png'

export const ContainerImage = styled.div`
    background-image: linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.8)), url(${backgroundImg});
    
    display: flex;
    justify-content: center;
`

export const MainContainer = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    backdrop-filter: blur(1rem);
`

export const Container = styled.div`
    padding: 1.5rem 0;
    width: 70%;    

    display: flex;
    align-items: flex-end;

    img {
        width: 30rem;
        height: 20rem;

        @media (max-width: 1300px) {
            display: none;
            width: 0;
            height: 0;
        }
    }
`

export const ContentContainer = styled.div`
    width: 60%;

    h1 {
        font-family: 'Baloo 2';
        font-weight: 800;
        font-size: 3rem;
        line-height: 4rem;
        color: ${props => props.theme["base-title"]};

        @media (max-width: 680px) {
            font-size: 1.6rem;
            line-height: 2rem;
        }
    };

    h4 {
        font-weight: normal;
        font-size: 1.25rem;
        line-height: 1.6rem;
        color: ${props => props.theme["base-subtitle"]};

        @media (max-width: 680px) {
            margin-top: 1rem;
            font-size: 1rem;
            line-height: 1rem;
        }
    }

    @media (max-width: 1300px) {
        width: 100%;
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

    @media (max-width: 680px) {
        height: 2rem;
        font-size: 0.8rem;
    }
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

export const MainCatalogContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CatalogContainer = styled.div`
    padding: 1.5rem 0;
    width: 70%;

    h2 {
        color: ${props => props.theme["base-subtitle"]};
        margin-bottom: 2rem;
        font-family: 'Baloo 2';
        font-size: 2rem;
    }
`

export const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
`