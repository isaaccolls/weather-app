// import { proxyUrl, url_base_weather, api_key  } from '../constants/api_url'; // Se usan las llaves porque no se exporto con default
import { url_base_weather, api_key  } from '../constants/api_url'; // Se usan las llaves porque no se exporto con default

const getUrlWeatherByCity = city => {
    // return `${ proxyUrl }${ url_base_weather }?q=${ city }&appid=${ api_key }`;
    const internet = true;
    if (internet) {
        return `${url_base_weather}?q=${city}&appid=${api_key}`;
    } else {
        return "http://localhost:3001";
    }

}

export default getUrlWeatherByCity;