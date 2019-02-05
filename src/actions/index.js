import transformForecast from '../services/transformForecast';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

// const action = { type: 'setCity', value: city };
export const setCity = payload => ({ type: SET_CITY, payload });
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload });

const api_key2 = "0f4e5887d7cf90e04bb3c6c61c84f638";
const url_base_weather2 = "https://api.openweathermap.org/data/2.5/forecast";

export const setSelectedCity = payload => {
    return dispatch => {

        const url_forecast = `${url_base_weather2}?q=${payload}&appid=${api_key2}`;
        // console.log(url_forecast);

        // activar en el estado un indicador de busqueda de datos
        dispatch(setCity(payload));


        return fetch(url_forecast).then(data => {
            return data.json()
        }).then(weatherData => {
            // console.log(weatherData);
            const forecastData = transformForecast(weatherData);
            console.log(forecastData);
            // this.setState({ forecastData });
            // this.setState = ({ forecastData: forecastData });

            // modificar el estado con el resultado de la promise (fetch)
            dispatch(setForecastData({city: payload, forecastData}));
        });
    };
};