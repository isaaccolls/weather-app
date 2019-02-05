import React, { Component } from 'react';
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
import { store } from './store';

const cities = [
    'Cabudare,ve',
    'Aspen,us',
    'Santiago,cl',
    'Chillan,cl',
    'San Carlos de Bariloche, ar',
];

// const store = createStore(() => {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// const actionCreator = value => ({ type: 'setCity', value: value });
// const setCity = value => ({ type: 'setCity', value });

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

    // const action = { type: 'setCity', value: city };
    // store.dispatch(action);
    store.dispatch(setCity(city));
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

export default App;
