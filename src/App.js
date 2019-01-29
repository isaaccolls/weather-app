import React, { Component } from 'react';
import LocationList from './components/LocationList';
import './App.css';

const cities = [
    'Buenos Aires,ar',
    'Bogota,col',
    'Mexico,mex',
    'Washington,us',
    'Barcelona,es',
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <LocationList cities={ cities }></LocationList>
      </div>
    );
  }
};

export default App;
