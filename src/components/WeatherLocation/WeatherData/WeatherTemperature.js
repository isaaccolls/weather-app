import React from 'react';
import WeatherIcons from 'react-weathericons'; 
import PropTypes from 'prop-types';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,//"snow"
    WINDY,
} from "../../../constants/weather";

const icons = {
    [CLOUD]: "cloud",
    [CLOUDY]: "cloudy",
    [SUN]: "day-sunny",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [WINDY]: "windy",
};
// Computed property names, like on object literals
// let key = "z";
// let { [key]: foo } = { z: "bar" };
// console.log(foo); // "bar"

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState]; //icons["snow"]
    if (icon)
        return <WeatherIcons name={ icon } size="2x" />
    else
        return <WeatherIcons name={ "day-sunny" } size="2x" />
};

const WeatherTemperature = ( { temperature , weatherState }) => (//21, "snow"
    <div>
        { getWeatherIcon(weatherState) }
        <span>{ `${temperature}°C` }</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;