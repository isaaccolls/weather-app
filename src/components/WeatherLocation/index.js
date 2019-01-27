import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {
    SNOW,//"snow"
} from "../../constants/weather";

const data = {
    temperature: 3,
    weatherState: SNOW,
    humidity: 7,
    wind: "10 m/s",
};

// const WeatherLocation = () => (
//     <div className="weatherLocationCont">
//         <Location city={'Barcelona'}></Location>
//         <WeatherData data={ data }></WeatherData>
//     </div>
// );

class WeatherLocation extends Component {

    render() {
        return (
            <div className="weatherLocationCont">
                <Location city={'Barcelona'}></Location>
                <WeatherData data={ data }></WeatherData>
            </div>
        );
    }

};
    

export default WeatherLocation;