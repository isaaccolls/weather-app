import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';

const WeatherData = () => (
    <div>
        <WeatherTemperature temperature={20} weatherState={''}>
        </WeatherTemperature>
        <WeatherExtraInfo humidity={88} wind={"10 m/s"}>
        </WeatherExtraInfo>
    </div>
);

export default WeatherData;