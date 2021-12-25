import { UPDATE_CURRENT_WEATHER } from './action-types';

const initialState = {

};


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
