import styled from "styled-components";

export const ProfileContainer = styled.div`
    background-color: ${props => props.theme["base-profile"]};
    padding: 2rem;
    margin-top: -6rem;

    display: flex;
    gap: 2rem;

    img {
        width: 9.25rem;
        height: 9.25rem;
    }

    @media (max-width: 870px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`
export const InformationContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const ProfileHeader = styled.div`
    display: flex;
    justify-content: space-between;

    h2 {
        color: ${props => props.theme["base-title"]};
    }

    a {
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

    @media (max-width: 580px) {
        text-align: center;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export const ProfileContent = styled.div`
    p {
        color: ${props => props.theme["base-text"]};
    }
`

export const ProfileFooter = styled.div`
    color: ${props => props.theme["base-subtitle"]};

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

    @media (max-width: 580px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

`

export const FilterContainer = styled.div`
    margin-top: 2rem;

    input {
        margin-top: 1rem;
        padding: 0.8rem;
        width: 100%;
        background-color: ${props => props.theme["base-input"]};
        border: solid 1px ${props => props.theme["base-border"]};
        outline: 0;
        border-radius: 5px;
        color: ${props => props.theme["base-text"]};
    }

    input::placeholder {
        color: ${props => props.theme["base-label"]};
    }

    input:focus {
        border: solid 1px ${props => props.theme["blue"]};
    }
`

export const FilterHeader = styled.div`
    display: flex;
    justify-content: space-between;

    h3 {
        color: ${props => props.theme["base-subtitle"]};
    }

    p {
        color: ${props => props.theme["base-span"]};
    }
    
`

export const CardContainer = styled.div`
    margin-top: 2rem;
    margin-bottom: 2rem;
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 1fr 1fr;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`