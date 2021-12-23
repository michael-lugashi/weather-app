import * as types from './action-types';
import axios from 'axios';

// export const updateWeather = (payload) => {
//  return {
//   type: types.UPDATE_CURRENT_WEATHER,
//   payload,
//  };
// };

export const updateWeather = (payload) => {
 return async (dispatch) => {
  try {
   const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${payload}&appid=6a8aa54584cb15d07b2b93f5d0945e96`
   );
   const { main } = response.data;
   console.log(response.data);
   dispatch({
    type: types.UPDATE_CURRENT_WEATHER,
    payload: { temp: main.temp },
   });
  } catch (error) {
   console.log(error.response.data);
  }
 };
};
