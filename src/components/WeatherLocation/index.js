import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Location from './Location';
import { api_weather } from '../../constants/api_url'; // Se usan las llaves porque no se exporto con default
import transformWeather from '../../services/transformWeather';
import WeatherData from './WeatherData';
import './styles.css';

class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
            city: 'Buenos Aires',
            data: null,
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
                { data ? <WeatherData data={ data }></WeatherData> : <CircularProgress size={ 50 } /> }
            </div>
        );
    }

};
    

export default WeatherLocation;