import styled from "styled-components";

export const MainContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
`

export const Container = styled.div`
    display: flex;
    flex-grow: 1;
    flex-basis: auto;
    justify-content: center;
    background-color: ${props => props.theme["base-background"]};
`

export const ContentContainer = styled.div`
    width: 70%;
`