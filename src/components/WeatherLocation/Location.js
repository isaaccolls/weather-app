import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Location = (props) => {
    // console.log(props);
    // debugger;
    
    // without destructuring
    // const city = props.city;
    // with destructuring
    const { city } = props;

    return (
        <div className="locationCont">
            <h1>
                {city}
            </h1>
        </div>
    );
};

Location.propTypes = {
    city: PropTypes.string.isRequired,
};

export default Location;