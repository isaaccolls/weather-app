import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './styles.css';

// always remember!!
// const city = this.props.city;
// const { city } = city;
class ForecastExtended extends Component {
    render() {
        const { city } = this.props;
        return (
            <div>
                <h2 className="forecast-title">Pronostico Extendido {city}</h2>
                <ForecastItem></ForecastItem>
            </div>
        );
    }
}

ForecastExtended.propsTypes = {
    city: PropTypes.string.isRequired,
};

export default ForecastExtended;