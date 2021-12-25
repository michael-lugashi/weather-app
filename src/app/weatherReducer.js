import { UPDATE_CURRENT_WEATHER } from './action-types';

const intialWeather = {
 currentTemp: 0,
 cityName: '',
 wind: 0,
 humidity: 0,
 high: 0,
 low: 0,
};

const weatherReducer = (state = intialWeather, action) => {
 console.log('Got to reducer!');
 const { type, payload } = action;
 switch (type) {
  case UPDATE_CURRENT_WEATHER:
   return payload;
  default:
   return state;
 }
};

export default weatherReducer;
