import styled from "styled-components";

export const ProfileContainer = styled.div`
    background-color: ${props => props.theme["base-profile"]};
    padding: 2rem;
    margin-top: -6rem;

    display: flex;
    gap: 2rem;
`
export const InformationContainer = styled.div`
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

`