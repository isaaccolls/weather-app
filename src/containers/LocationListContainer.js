import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setSelectedCity } from './../actions';
import LocationList from './../components/LocationList';

export class LocationListContainer extends Component {
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
              cities={this.props.cities}
              onSelectedLocation={this.handleSelectedLocation}>
            </LocationList>
        );
    }
}

LocationListContainer.propTypes = {
  setCity: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
};

const mapDispatchToPropsActions = dispatch => (
  {
    // dispatchSetCity: value => dispatch(setCity(value))
    setCity: value => dispatch(setSelectedCity(value))
  }
);

export default connect(null, mapDispatchToPropsActions)(LocationListContainer);