import React, { Component } from 'react';
import LocationList from './components/LocationList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LocationList></LocationList>
      </div>
    );
  }
};

export default App;
