import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecast from '../services/transformForecast';
import './styles.css';

// const days = [
//     'lunes',
//     'martes',
//     'miercoles',
//     'jueves',
//     'viernes',
// ];

// const data = {
//     temperature: 21,
//     humidity: 20,
//     weatherState: 'normal',
//     wind: 'normal'
// };

export const api_key2 = "0f4e5887d7cf90e04bb3c6c61c84f638";
export const url_base_weather2 = "https://api.openweathermap.org/data/2.5/forecast";

// always remember!!
// const city = this.props.city;
// const { city } = city;
class ForecastExtended extends Component {

    constructor() {
        super();
        this.state = {
            forecastData: null,
        };
    }

    componentDidMount() {
        this.updateCity(this.props.city);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.city !== this.props.city) {
            this.setState({ forecastData: null });
            this.updateCity(nextProps.city);
        }
    }

    updateCity = city => {
        const url_forecast = `${url_base_weather2}?q=${city}&appid=${api_key2}`;
        // console.log(url_forecast);
        fetch(url_forecast).then(data => {
            return data.json()
        }).then(weatherData => {
            console.log(weatherData);
            const forecastData = transformForecast(weatherData);
            console.log(forecastData);
            this.setState({ forecastData });
            // this.setState = ({ forecastData: forecastData });
        });
    }

    renderForecastItemDays(forecastData) {
        // return <h1>Render Items</h1>;
        return forecastData.map(forecast => (
            <ForecastItem
                key={`${forecast.weekDay}${forecast.hour}`}
                weekDay={forecast.weekDay} 
                hour={forecast.hour} 
                data={forecast.data}>
            </ForecastItem>));
    }

    renderProgess = () => {
        return <h3>Cargando pronostico extendido...</h3>;
    }

    render() {
        const { city } = this.props;
        const { forecastData } = this.state;
        return (
            <div>
                <h2 className="forecast-title">Pronostico Extendido {city}</h2>
                {
                    forecastData ?
                    this.renderForecastItemDays(forecastData) :
                    this.renderProgess()
                }
            </div>
        );
    }
}

ForecastExtended.propsTypes = {
    city: PropTypes.string.isRequired,
};

export default ForecastExtended;