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
  render() {
    return (
      <div className="App">
        <LocationList cities={cities}></LocationList>
      </div>
    );
  }
};

export default App;
