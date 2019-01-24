import React from 'react';

const Location = (props) => {
    // console.log(props);
    // debugger;
    
    // without destructuring
    // const city = props.city;
    // with destructuring
    const { city } = props;

    return (
        <div><h1>{city}</h1></div>
    );
};

export default Location;