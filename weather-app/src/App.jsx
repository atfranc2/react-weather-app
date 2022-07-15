import './App.css';
import WeatherForecast from './components/weather/WeatherForecast';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1000px; 
  margin: 0 auto; 
`;

const Banner = styled.div`
  font-size: 2rem; 
  padding: 4rem 5rem; 
  background-color: #000047; 
  color: #ffffff; 
  text-align:center; 
  margin-bottom: 2rem;
`;

function App() {
  return (
    <div>
      <Banner>Weather in Heidenheim, Germany</Banner>
      <Container>
        <WeatherForecast />
      </Container>
    </div>
  );
}

export default App;
