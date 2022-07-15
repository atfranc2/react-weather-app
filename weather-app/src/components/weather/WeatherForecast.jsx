import moment from 'moment';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official'
import highchartsMore from 'highcharts/highcharts-more';
import highchartsWindbarb from 'highcharts/modules/windbarb';
import TabbedNavigation from '../tabs/TabbedNavigation';
import FourDayLookAhead from './FourDayLookAhead';
import { useQuery } from 'react-query';
import { getCurrentWeatherKey, getFiveDayForecastKey } from '../../constants/query.constants';
import { getCurrentWeather, getFiveDayForecast } from '../../services/openWeather';
import { IconContainer, LineBreak, LocationSummary, StyledCurrentWeather, Temperature, WeatherHeader, WeatherIcon, WeatherSummary, WeatherSummaryContainer } from './weather.styles';
import { getCloudDescriptor, getIconSrc, getWindDirection } from './utils';
import { getPrecipOptions, getTempOptions, getWindOptions } from './plotOptions';

highchartsWindbarb(Highcharts);
highchartsMore(Highcharts);

const WeatherForecast = () => {
    const { isLoading, data } = useQuery(getCurrentWeatherKey, getCurrentWeather);
    const { isLoading: forecastLoading, data: forecastData } = useQuery(getFiveDayForecastKey, getFiveDayForecast);


    if (isLoading || forecastLoading)
        return "Loading";

    const currentTime = moment().utcOffset(2).format("dddd, h:mm A");
    const mainCondition = data.weather[0].main;

    return (
        <>
            <StyledCurrentWeather>
                <WeatherSummaryContainer>
                    <LocationSummary>
                        <header>Heidenheim, Germany</header>
                        <div>{currentTime}</div>
                        <div>{mainCondition}</div>
                    </LocationSummary>
                    <div>
                        <IconContainer>
                            <WeatherIcon src={getIconSrc(data.weather[0].icon)} alt="" />
                            <Temperature>{Math.round(data.main.temp)} °F</Temperature>
                        </IconContainer>
                        <WeatherSummary>
                            Feels {Math.round(data.main.feels_like)}°F. {getCloudDescriptor(data.clouds.all)}. Winds Out of the {getWindDirection(data.wind.deg)}.
                        </WeatherSummary>
                    </div>
                </WeatherSummaryContainer>
                <LineBreak />
                <WeatherHeader>24-Hour Forecasts</WeatherHeader>
                <TabbedNavigation
                    tabNames={["Temperature", "Precipitation", "Wind"]}
                    tabContent={[
                        <HighchartsReact highcharts={Highcharts} options={getTempOptions(forecastData)} />,
                        <HighchartsReact highcharts={Highcharts} options={getPrecipOptions(forecastData)} />,
                        <HighchartsReact highcharts={Highcharts} options={getWindOptions(forecastData)} />,
                    ]}
                />
            </StyledCurrentWeather>
            <LineBreak />
            <WeatherHeader>Four Day Look Ahead</WeatherHeader>
            <FourDayLookAhead forecastData={forecastData} />
            <LineBreak />
        </>
    );
}

export default WeatherForecast;