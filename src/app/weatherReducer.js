import { UPDATE_CURRENT_WEATHER } from './action-types';

const intialWeather = {
 temp: 0,
 country: 'country',
};

const weatherReducer = (state = intialWeather, action) => {
 console.log('Got to reducer!');
 const { type, payload } = action;
 switch (type) {
  case UPDATE_CURRENT_WEATHER:
   state.temp = payload.temp
   return { ...state };
  default:
   return state;
 }
};

export default weatherReducer;
