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

const data1 = {
    temperature: 15,
    weatherState: SNOW,
    humidity: 73,
    wind: "200 m/s",
};

// const WeatherLocation = () => (
//     <div className="weatherLocationCont">
//         <Location city={'Barcelona'}></Location>
//         <WeatherData data={ data }></WeatherData>
//     </div>
// );

class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
            city: 'Buenos Aires',
            data: data,
        };
    }

    handleUpdateCick = () => {
        console.log("actualizado");
        this.setState({
            city: 'Colorado',
            data: data1,
        });
    }

    render() {
        const { city, data } = this.state;
        return (
            <div className="weatherLocationCont">
                <Location city={ city }></Location>
                <WeatherData data={ data }></WeatherData>
                <button onClick={ this.handleUpdateCick }>Actualizar</button>
            </div>
        );
    }

};
    

export default WeatherLocation;