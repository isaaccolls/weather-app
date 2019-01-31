import React, { Component } from 'react';
import PropTypes from 'prop-types';

// always remember!!
// const city = this.props.city;
// const { city } = city;
class ForecastExtended extends Component {
    render() {
        const { city } = this.props;
        return (<div>Pronostico Extendido {city}</div>);
    }
}

ForecastExtended.propsTypes = {
    city: PropTypes.string.isRequired,
};

export default ForecastExtended;