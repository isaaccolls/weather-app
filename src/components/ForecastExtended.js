import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './styles.css';

const days = [
    'lunes',
    'martes',
    'miercoles',
    'jueves',
    'viernes',
];

// always remember!!
// const city = this.props.city;
// const { city } = city;
class ForecastExtended extends Component {

    renderForecastItemDays() {
        return days.map(day => (<ForecastItem weekDay={day}></ForecastItem>));
    }

    render() {
        const { city } = this.props;
        return (
            <div>
                <h2 className="forecast-title">Pronostico Extendido {city}</h2>
                {this.renderForecastItemDays()}
            </div>
        );
    }
}

ForecastExtended.propsTypes = {
    city: PropTypes.string.isRequired,
};

export default ForecastExtended;