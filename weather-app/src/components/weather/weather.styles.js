import styled from "styled-components";


export const StyledCurrentWeather = styled.div``;

export const Temperature = styled.span`
    font-size: 2rem; 
    font-weight: 500; 
`;

export const WeatherSummaryContainer = styled.div`
    display: flex; 
    flex-direction: row;
    justify-content: space-between; 
    align-items: center; 
`;

export const WeatherSummary = styled.div`
    font-size: 1rem;
    font-weight: 500; 
`;

export const IconContainer = styled.div`
    display: flex; 
    flex-direction: row; 
    align-items: center; 
`;

export const LocationSummary = styled.div`
    font-size: 1.5rem; 
    font-weight: 500; 
`;


export const LineBreak = styled.div`
    width: 100%; 
    height: 1px; 
    margin: 2rem 0; 
    background-color: lightgray; 
`;


export const WeatherHeader = styled.header`
    font-size: 2.5rem; 
    font-weight: 500; 
    text-align: center; 
    margin-bottom: 1rem; 
`;

export const MinMaxTemp = styled.span`
    margin: 0 0.5rem; 
`;

export const StyledFourDayLookAhead = styled.div`
    display: flex; 
    flex-direction: row; 
    justify-content: space-evenly; 
    flex-wrap: wrap; 
    margin-top: 2rem; 
`;

export const LookAheadTile = styled.div`
    display: flex; 
    flex-direction: column; 
    padding: 1rem; 
    border: 1px solid black; 
    align-items: center; 
    background-color: #ffffff; 
    border-radius: 5px; 
`;

export const WeatherIcon = styled.img`
    filter: invert(100%);
`;
