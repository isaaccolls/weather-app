import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from './../actions';
// import { setSelectedCity, setWeather } from './../actions';
import { getWeatherCities, getCity } from '../reducers';
import LocationList from './../components/LocationList';

export class LocationListContainer extends Component {

    componentDidMount() {
      const { setWeather, setSelectedCity, cities, city } = this.props;

      // this.props.setWeather(this.props.cities);
      setWeather(cities);
   
      // this.props.setCity(city);
      setSelectedCity(city);
    }

    handleSelectedLocation = city => {
        // console.log(`handleSelectedLocation started\ncity: ${city}`);
        // this.setState({ city });

        // store.dispatch(setCity(city));
        // this.props.dispatchSetCity(city);
        this.props.setSelectedCity(city);
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
  setSelectedCity: PropTypes.func.isRequired,
  setWeather: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
  citiesWeather: PropTypes.array,
  city: PropTypes.string.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);
// const mapDispatchToProps = dispatch => (
//   {
//     // dispatchSetCity: value => dispatch(setCity(value))
//     setSelectedCity: value => dispatch(setSelectedCity(value)),
//     setWeather: cities => dispatch(setWeather(cities)),
//   }
// );

const mapStateToProps = state => ({
  citiesWeather: getWeatherCities(state),
  city: getCity(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationListContainer);