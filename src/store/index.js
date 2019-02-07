import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './../reducers/';

const initialState = {
    city: 'Aspen,us',
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export const store = createStore(city, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// export const store = createStore(city, initialState, applyMiddleware(thunk)); // Sin la herramienta para debug
export const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(thunk)));
