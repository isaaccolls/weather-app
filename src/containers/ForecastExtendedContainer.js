import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ForecastExtended from '../components/ForecastExtended';

export class ForecastExtendedContainer extends Component {
    render() {
        const { city, forecastData } = this.props;
        return (
          city &&
          <ForecastExtended city={city} forecastData={forecastData} />
        );
    }
}

ForecastExtendedContainer.propTypes = {
  city: PropTypes.string.isRequired,
  forecastData: PropTypes.array.isRequired,
};

// const mapStateToProps = state => ({ city: state.city });
const mapStateToProps = ({ city, cities }) => ({ city, forecastData: cities[city] && cities[city].forecastData });

export default connect(mapStateToProps, null)(ForecastExtendedContainer);