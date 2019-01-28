import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {
    SNOW,//"snow"
} from "../../constants/weather";

const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const location = "Buenos Aires,ar";
const api_key = "0f4e5887d7cf90e04bb3c6c61c84f638";
const url_base_weather = "https://samples.openweathermap.org/data/2.5/weather";

const api_weather = `${proxyUrl}${url_base_weather}?q=${location}&appid=${api_key}`;
// console.log("api_weather: " + api_weather);

const data = {
    temperature: 3,
    weatherState: SNOW,
    humidity: 7,
    wind: "10 m/s",
};

// const data1 = {
//     temperature: 15,
//     weatherState: SNOW,
//     humidity: 73,
//     wind: "200 m/s",
// };

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

    getWeatherState = weather_data => {
        return SNOW;
    }

    getData = weather_data => {
        const { humidity, temp } = weather_data.main;
        const { speed } = weather_data.wind;
        const weatherState = this.getWeatherState(weather_data);

        const data = {
            humidity,
            temperature: temp,
            weatherState,
            wind: `${speed} m/s`,
        };

        return data;
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
            const newWeather = this.getData(data);
            console.log("newWeather");
            console.log(newWeather);
            this.setState({
                data: newWeather,
            });
        });

        // this.setState({
        //     city: 'Colorado',
        //     data: data1,
        // });
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