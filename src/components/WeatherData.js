import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import {
    SNOW,
} from "../constants/weather";

const WeatherData = () => (
    <div>
        <WeatherTemperature temperature={ 20 } weatherState={ SNOW }>
        </WeatherTemperature>
        <WeatherExtraInfo humidity={ 88 } wind={ "10 m/s" }>
        </WeatherExtraInfo>
    </div>
);

export default WeatherData;