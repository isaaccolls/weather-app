import React, { Component } from 'react';
import Location from './Location';
import { api_weather } from '../../constants/api_url'; // Se usan las llaves porque no se exporto con default
import transformWeather from '../../services/transformWeather';
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

class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
            city: 'Buenos Aires',
            data: data,
        };
        console.log("constructor");
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.handleUpdateCick();
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
    }

    handleUpdateCick = () => {
        console.log("actualizado");
        fetch(api_weather).then( resolve => {
            console.log(resolve);
            // debugger;
            return resolve.json();
        }).then(data => {
            console.log("data json")
            console.log(data);
            // debugger; 
            const newWeather = transformWeather(data);
            console.log("newWeather");
            console.log(newWeather);
            this.setState({
                data: newWeather,
            });
        });
    }

    render() {
        console.log("render");
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