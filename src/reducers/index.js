import { combineReducers } from 'redux';
import  { cities } from './cities';
import { city } from './city';

    // myCities: cities,
    // currentCity: city,
export default combineReducers({
    cities,
    city
});