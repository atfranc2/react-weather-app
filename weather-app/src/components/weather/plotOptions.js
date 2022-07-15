import Highcharts from 'highcharts';
import { getHourlyWind, getHourlyPrecipProb, getHourlyTemp } from './utils';

export const getWindOptions = data => {
    const windData = getHourlyWind(data, [0, 8]);

    return {

        title: {
            text: 'Wind Speed'
        },

        xAxis: {
            type: 'datetime',
            offset: 40,
        },

        yAxis: {
            title: {
                text: "Wind Speed (mi/h)"
            }
        },

        series: [{
            type: 'windbarb',
            data: windData,
            name: 'Wind',
            color: Highcharts.getOptions().colors[1],
            showInLegend: false,
            tooltip: {
                valueSuffix: ' mi/h'
            }
        }, {
            type: 'area',
            keys: ['x', 'y', 'rotation'], // rotation is not used here
            data: windData,
            color: Highcharts.getOptions().colors[0],
            fillColor: {
                linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
                stops: [
                    [0, Highcharts.getOptions().colors[0]],
                    [
                        1,
                        Highcharts.color(Highcharts.getOptions().colors[0])
                            .setOpacity(0.25).get()
                    ]
                ]
            },
            name: 'Wind speed',
            tooltip: {
                valueSuffix: ' mi/h'
            },
            states: {
                inactive: {
                    opacity: 1
                }
            }
        }]

    }
}

export const getPrecipOptions = data => {
    const precipData = getHourlyPrecipProb(data, [0, 8]);

    return {
        chart: {
            type: 'area'
        },

        title: {
            text: 'Precipitation Probability'
        },

        xAxis: {
            type: 'datetime',
            title: {
                text: "Time"
            }
        },

        yAxis: {
            title: {
                text: "Probability (%)"
            }
        },

        tooltip: {
            crosshairs: true,
            shared: true,
            valueSuffix: '%'
        },

        series: [{
            name: 'Precipitation Probability',
            data: precipData,
            zIndex: 1,
            color: '#8dc1fc',
            marker: {
                fillColor: "#0378ff",
                lineWidth: 2,
                lineColor: "#0378ff"
            }
        }]
    }
}

export const getTempOptions = data => {
    const tempData = getHourlyTemp(data, [0, 8]);

    return {
        chart: {
            type: 'area'
        },

        title: {
            text: 'Temperature'
        },

        xAxis: {
            type: 'datetime',
            title: {
                text: "Time"
            }
        },

        yAxis: {
            title: {
                text: "Temperature (°F)"
            }
        },

        tooltip: {
            crosshairs: true,
            shared: true,
            valueSuffix: '°F'
        },

        series: [{
            name: 'Temperature',
            data: tempData.averages,
            zIndex: 1,
            color: '#fae9bb',
            marker: {
                fillColor: "#fab802",
                lineWidth: 2,
                lineColor: "#fab802"
            }
        }]
    }
}
