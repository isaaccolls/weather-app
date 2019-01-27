import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import {
    SNOW,//"snow"
} from "../../../constants/weather";
import './styles.css';

const WeatherData = () => (
    <div className="weatherDataCont">
        <WeatherTemperature temperature={ 21 } weatherState={ SNOW }>
        </WeatherTemperature>
        <WeatherExtraInfo humidity={ 88 } wind={ "10 m/s" }>
        </WeatherExtraInfo>
    </div>
);

export default WeatherData;