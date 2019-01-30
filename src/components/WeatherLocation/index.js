import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { PropTypes } from 'prop-types';
import getUrlWeatherByCity from '../../services/getUrlWeatherByCity';
import Location from './Location';
import transformWeather from '../../services/transformWeather';
import WeatherData from './WeatherData';
import './styles.css';

class WeatherLocation extends Component {

    constructor(props) {
        super(props);
        const { city } = props;
        this.state = {
            city,
            data: null,
        };
        // console.log("constructor");
    }

    componentDidMount() {
        // console.log("componentDidMount");
        this.handleUpdateCick();
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log("componentDidUpdate");
    }

    handleUpdateCick = () => {
        // console.log("actualizado");
        const api_weather = getUrlWeatherByCity(this.state.city);
        fetch(api_weather).then( resolve => {
            // console.log(resolve);
            // debugger;
            return resolve.json();
        }).then(data => {
            // console.log("data json")
            console.log(data);
            // debugger; 
            const newWeather = transformWeather(data);
            // console.log("newWeather");
            // console.log(newWeather);
            this.setState({
                data: newWeather,
            });
        });
    }

    render() {
        // console.log("render");
        const { onWeatherLocationClick } = this.props;
        const { city, data } = this.state;
        return (
            <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
                <Location city={city}></Location>
                { data ? <WeatherData data={data}></WeatherData> : <CircularProgress size={50} /> }
            </div>
        );
    }

};

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
};

export default WeatherLocation;