import { UPDATE_CURRENT_WEATHER } from './action-types';
import { getInitialState } from './actions';

const initialState = {
//  currentTemp: 0,
//  cityName: 'London',
//  wind: 0,
//  humidity: 0,
//  high: 0,
//  low: 0,
};
// async function getstate() {
//  return await getInitialState()

// }
// const initialState = getstate()

const weatherReducer = (state = initialState, action) => {
  console.log(state)
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
