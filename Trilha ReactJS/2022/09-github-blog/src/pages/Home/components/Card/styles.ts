import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
    padding: 1.5rem;
    background-color: ${props => props.theme["base-post"]};
    border: solid 3px ${props => props.theme["base-post"]};
    border-radius: 20px;
    text-decoration: none;
    
    p {
        color: ${props => props.theme["base-text"]};
        display: -webkit-box;
        -webkit-line-clamp: 8;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    &:hover {
        border: solid 3px ${props => props.theme["base-border"]};
        cursor: pointer;
    }
`

export const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;

    h3 {
        color: ${props => props.theme["base-title"]};
    }

    time {
        color: ${props => props.theme["base-span"]};
    }

    @media (max-width: 680px) {
        flex-direction: column;
    }

    @media (min-width: 900px) and (max-width: 1390px) {
        flex-direction: column;
    }
`