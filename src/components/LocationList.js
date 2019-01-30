import React from 'react';
import PropTypes from 'prop-types';

import WeatherLocation from './WeatherLocation';

const LocationList = ({ cities }) => {
    console.log(cities);
    return (
        <div>
            <WeatherLocation city="Cabudare,ve" />
            <WeatherLocation city="Aspen,us" />
            <WeatherLocation city="Santiago,cl" />
            <WeatherLocation city="Chillan,cl" />
        </div>
    );
};

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
};

export default LocationList;