import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setSelectedCity, setWeather } from './../actions';
import { getWeatherCities, getCity } from '../reducers';
import LocationList from './../components/LocationList';

export class LocationListContainer extends Component {

    componentDidMount() {
      const { setWeather, setCity, cities, city } = this.props;

      // this.props.setWeather(this.props.cities);
      setWeather(cities);
   
      // this.props.setCity(city);
      setCity(city);
    }

    handleSelectedLocation = city => {
        // console.log(`handleSelectedLocation started\ncity: ${city}`);
        // this.setState({ city });

        // store.dispatch(setCity(city));
        // this.props.dispatchSetCity(city);
        this.props.setCity(city);
    }

    render() {
        return (
            <LocationList
              cities={this.props.citiesWeather}
              onSelectedLocation={this.handleSelectedLocation}>
            </LocationList>
        );
    }
}

LocationListContainer.propTypes = {
  setCity: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
  citiesWeather: PropTypes.array,
  city: PropTypes.string.isRequired,
};

const mapDispatchToPropsActions = dispatch => (
  {
    // dispatchSetCity: value => dispatch(setCity(value))
    setCity: value => dispatch(setSelectedCity(value)),
    setWeather: cities => dispatch(setWeather(cities)),
  }
);

const mapStateToProps = state => ({
  citiesWeather: getWeatherCities(state),
  city: getCity(state),
});

export default connect(mapStateToProps, mapDispatchToPropsActions)(LocationListContainer);