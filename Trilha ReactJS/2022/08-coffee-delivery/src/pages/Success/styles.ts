import styled from "styled-components";

export const MainContainer = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
`

export const Container = styled.div`
    width: 70%;
    margin-top: 4rem;

    h1 {
        color: ${props => props.theme["yellow-dark"]};
        font-family: 'Baloo 2';
    }

    p {
        color: ${props => props.theme["base-subtitle"]};
    }
`

export const OrderContainer = styled.div`
    margin-top: 3rem;
    display: flex;
    gap: 2rem;

    @media (max-width: 1300px) {
        flex-direction: column;
    }

`

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        @media (max-width: 500px) {
            max-width: 300px;
            max-height: 150px;
        }
    }

`

export const OrderInfoContainerBorder = styled.div`
    border: double 1px transparent;
    border-top-right-radius: 40px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 10px;
    
    background-image: linear-gradient(${props => props.theme.background}, ${props => props.theme.background}), radial-gradient(circle at top left, ${props => props.theme["yellow-dark"]}, ${props => props.theme.purple});
    background-origin: border-box;
    background-clip: content-box, border-box;

`

export const OrderInfo = styled.div`
    padding: 3rem 6rem 3rem 3rem;

    @media (max-width: 780px) {
        padding: 3rem 3rem 3rem 3rem;
    }

`

export const OrderItem = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    color: ${props => props.theme["base-text"]};

    & + & {
        margin-top: 2rem;
    }
`

interface VantageIconProps {
    bgcolor: 'yellow-dark' | 'yellow' | 'purple';
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