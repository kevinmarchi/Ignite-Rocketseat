import styled from "styled-components";

export const PostHeaderContainer = styled.div`
    background-color: ${props => props.theme["base-profile"]};
    padding: 4rem;
    margin-top: -6rem;

    @media (max-width: 470px) {
        padding: 1.5rem;
    }
`

export const PostHeaderLinks = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    a {
        font-size: 0.8rem;
        text-decoration: none;
        color: ${props => props.theme["blue"]};
        font-weight: bold;

        display: flex;
        gap: 0.5rem;
        justify-content: center;
        align-items: center;

        border-bottom: solid 2px ${props => props.theme["base-profile"]};
    }

    a:hover {
        border-color: ${props => props.theme["blue"]};
    }
`

export const PostHeaderTitle = styled.div`
    margin-top: 2rem;
    h2 {
        color: ${props => props.theme["base-title"]};
    }

    @media (max-width: 520px) {
        font-size: 1rem;
        text-align: center;
    }
`

export const PostHeaderFooter = styled.div`
    margin-top: 1rem;
    color: ${props => props.theme["base-span"]};

    display: flex;
    gap: 1rem;

    span {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.2rem;

        svg {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    @media (max-width: 670px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export const PostContent = styled.div`
    padding: 3rem;
    color: ${props => props.theme["base-text"]};

    h4 {
        margin-top: 1rem;
        margin-bottom: 1rem;

        color: ${props => props.theme["blue"]};
        font-size: 1.2rem;
        text-decoration: underline;
    }

    @media (max-width: 650px) {
        padding: 1rem;
    }
`

export const CodeText = styled.div`
    margin-top: 2rem;
    padding: 2rem;
    background-color: ${props => props.theme["base-post"]};

    pre {
        white-space: pre-wrap;
    }

    @media (max-width: 630px) {
        padding: 1rem;
    }
`