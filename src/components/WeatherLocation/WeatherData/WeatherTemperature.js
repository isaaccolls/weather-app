import React from 'react';
import WeatherIcons from 'react-weathericons'; 
import PropTypes from 'prop-types';
import './styles.css';
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

    const sizeIcon = "4x";

    if (icon)
        return <WeatherIcons className="wicon" name={ icon } size={sizeIcon} />
    else
        return <WeatherIcons className="wicon" name={ "day-sunny" } size={sizeIcon} />
};

const WeatherTemperature = ( { temperature , weatherState }) => (//21, "snow"
    <div className="weatherTemperatureCont">
        { getWeatherIcon(weatherState) }
        <span className="temperature">{ `${temperature}` }</span>
        <span className="temperatureType">{ `°C ` }</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;