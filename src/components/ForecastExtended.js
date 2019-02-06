import React from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './styles.css';

const renderForecastItemDays = (forecastData) => {
    // return <h1>Render Items</h1>;
    return forecastData.map(forecast => (
        <ForecastItem
            key={`${forecast.weekDay}${forecast.hour}`}
            weekDay={forecast.weekDay} 
            hour={forecast.hour} 
            data={forecast.data}>
        </ForecastItem>));
}

const renderProgess = () => {
    return <h3>Cargando pronostico extendido...</h3>;
}

const ForecastExtended = ({ city, forecastData }) => (
    <div>
        <h2 className="forecast-title">Pronostico Extendido {city}</h2>
        {
            forecastData ?
            renderForecastItemDays(forecastData) :
            renderProgess()
        }
    </div>
)

ForecastExtended.propsTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array,
};

export default ForecastExtended;