import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${props => props.theme["base-background"]};
`

export const Content = styled.div`
    color: ${props => props.theme["base-text"]};

    text-align: center;
`