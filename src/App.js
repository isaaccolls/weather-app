import React, { Component } from 'react';
import LocationList from './components/LocationList';
import './App.css';

const cities = [
    'Cabudare,ve',
    'Aspen,us',
    'Santiago,cl',
    'Chillan,cl',
];

class App extends Component {

  handleSelectedLocation = city => {
    console.log("handleSelectedLocation started");
    console.log("city: " + city);
  }

  render() {
    return (
      <div className="App">
        <LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation}></LocationList>
      </div>
    );
  }
};

export default App;
