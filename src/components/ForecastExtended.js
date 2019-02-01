import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
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

    renderForecastItemDays() {
        return "Render Items";
        // return days.map(day => (<ForecastItem weekDay={day} hour={420} data={data}></ForecastItem>));
    }

    renderProgess() {
        return <h3>Cargando pronostico extendido</h3>;
    }

    render() {
        const { city } = this.props;
        const { forecastData } = this.state;
        return (
            <div>
                <h2 className="forecast-title">Pronostico Extendido {city}</h2>
                {
                    forecastData ?
                    this.renderForecastItemDays() :
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