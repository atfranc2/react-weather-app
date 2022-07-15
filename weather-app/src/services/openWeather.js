import axios from 'axios';


class WeatherRequest {
    constructor() {
        this.baseUrl = process.env.REACT_APP_API_URL;
        this.apiKey = process.env.REACT_APP_API_KEY;
        this.locationParam = "q=heidenheim,de";
    }

    buildRequestUrl(relativeUrl) {
        return `${this.baseUrl}/${relativeUrl}?${this.locationParam}&units=imperial&APPID=${this.apiKey}`;
    }

    async request(relativeUrl, body) {
        return axios.request({
            url: this.buildRequestUrl(relativeUrl),
            ...body
        });
    }
}

/*
    Retrieves the current weather in Heidenheim, Germany
*/
export const getCurrentWeather = async () => {
    const requestManager = new WeatherRequest();
    const response = await requestManager.request('weather', {
        method: 'get',
    });

    return response.data;
}

/*
    Retrieves the five day weather forecast in Heidenheim, Germany
    in 3 hour intervals
*/
export const getFiveDayForecast = async () => {
    const requestManager = new WeatherRequest();
    const response = await requestManager.request('forecast', {
        method: 'get',
    });

    return response.data;
}
