import { StyledFourDayLookAhead, LookAheadTile, WeatherIcon, MinMaxTemp } from "./weather.styles";
import moment from "moment";
import { getIconSrc, getMinTemp, getMaxTemp } from "./utils";
import _ from 'lodash';


const FourDayLookAhead = ({ forecastData }) => {
    return (
        <StyledFourDayLookAhead>
            {
                _.range(2, 6).map(index => {
                    let upper = (index * 8) - 1;
                    let lower = upper - 7;
                    let item = forecastData.list[lower];
                    let date = moment(item.dt * 1000).utcOffset(2).format("ddd");
                    return (
                        <LookAheadTile>
                            <div>{date}</div>
                            <WeatherIcon src={getIconSrc(item.weather[0].icon)} alt="" />
                            <div>
                                <MinMaxTemp>{getMinTemp(forecastData, [lower, upper])}°F </MinMaxTemp>
                                <span>|</span>
                                <MinMaxTemp>{getMaxTemp(forecastData, [lower, upper])}°F</MinMaxTemp>
                            </div>
                        </LookAheadTile>
                    )
                })
            }
        </StyledFourDayLookAhead>
    )
}

export default FourDayLookAhead; 