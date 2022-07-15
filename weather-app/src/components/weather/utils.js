const clouds = [
    { upper: 10, description: "Clear Skies" },
    { upper: 50, description: "Scattered Clouds" },
    { upper: 85, description: "Mostly Cloudy" },
    { upper: 100, description: "Overcast" },
];

const windDirections = [
    { upper: 45, description: "South" },
    { upper: 90, description: "South-West" },
    { upper: 135, description: "West" },
    { upper: 180, description: "North-West" },
    { upper: 225, description: "North" },
    { upper: 270, description: "North-East" },
    { upper: 315, description: "East" },
    { upper: 360, description: "North-West" },
];

export const getWindDirection = (windDeg) => {
    for (let direction of windDirections) {
        if (direction.upper >= windDeg) return direction.description;
    }

    return "";
}

export const getCloudDescriptor = coveredPortion => {
    for (let cloud of clouds) {
        if (cloud.upper >= coveredPortion) return cloud.description;
    }

    return "";
}

export const getHourlyPrecipProb = (data, interval) => {
    const precips = [];
    const [lower, upper] = interval;
    for (let index = lower; index <= upper; index++) {
        const item = data.list[index];
        precips.push([item.dt * 1000, item.pop * 100]);
    }

    return precips;
}

export const getHourlyTemp = (data, interval) => {
    const averages = [];
    const ranges = [];
    const [lower, upper] = interval;
    for (let index = lower; index <= upper; index++) {
        const item = data.list[index];
        const range = [item.dt * 1000, item.main.temp_min, item.main.temp_max];
        const average = [item.dt * 1000, item.main.temp];
        averages.push(average);
        ranges.push(range);
    }

    return { averages, ranges };
}

export const getHourlyWind = (data, interval) => {
    const winds = [];
    const [lower, upper] = interval;
    for (let index = lower; index <= upper; index++) {
        const item = data.list[index];
        winds.push([item.dt * 1000, item.wind.speed, item.wind.deg]);
    }

    return winds;
}

export const getIconSrc = icon => `http://openweathermap.org/img/wn/${icon}@2x.png`

export const getMinTemp = (data, interval) => {
    const [lower, upper] = interval;
    let min = 5000;
    for (let index = lower; index <= upper; index++) {
        const item = data.list[index];
        min = min > item.main.temp ? item.main.temp : min;
    }

    return Math.round(min);
}

export const getMaxTemp = (data, interval) => {
    const [lower, upper] = interval;
    let max = -5000;
    for (let index = lower; index <= upper; index++) {
        const item = data.list[index];
        max = max < item.main.temp ? item.main.temp : max;
    }

    return Math.round(max);
}