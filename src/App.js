import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Col, Row } from 'react-flexbox-grid';
// import { createStore } from 'redux';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import './App.css';
import { setCity } from './actions';

const cities = [
    'Cabudare,ve',
    'Aspen,us',
    'Santiago,cl',
    'Chillan,cl',
    'San Carlos de Bariloche, ar',
];

class App extends Component {

  constructor() {
    super();
    this.state = {
      city: null,
    };
  }

  handleSelectedLocation = city => {
    console.log(`handleSelectedLocation started\ncity: ${city}`);
    this.setState({ city });

    // store.dispatch(setCity(city));
    this.props.setCity(city);
  }

  render() {
    const { city } = this.state;

    return (
      <Grid>
        <Row>
          <AppBar position='sticky'>
            <Toolbar>
              <Typography variant='title' color='inherit'>
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList
              cities={cities}
              onSelectedLocation={this.handleSelectedLocation}>
            </LocationList>
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="detail">
                {
                  city &&
                  <ForecastExtended city={city}></ForecastExtended>
                }
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

// export default App;

const mapDispatchToPropsActions = dispatch => ({
  setCity: value => dispatch(setCity(value))
});
const AppConnected = connect(null, mapDispatchToPropsActions)(App); // Higher-Order Components

export default AppConnected;