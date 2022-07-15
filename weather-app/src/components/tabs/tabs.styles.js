import styled from "styled-components";


export const TabsContainer = styled.div`
    border-bottom: 1px solid lightgray; 
`;

export const StyledTabs = styled.div`
    display: flex; 
    flex-direction: row; 
    justify-content: left; 
`;

export const StyledTab = styled.div`
    padding: 0.5rem 1rem;
    background-color: ${props => props.active ? "lightgray" : "none"}; 
    cursor: pointer;

    &:hover {
        background-color: darkgray; 
        color: white; 
    }
`;
