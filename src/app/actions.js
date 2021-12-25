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
   const {name, wind: {speed }, weather: {description}, main: { temp, temp_min, temp_max, humidity}, timezone } = response.data;
   const relevantInfo = {
       cityName: name,
       wind: speed,
       weather: description,
       currentTemp: temp,
       high: temp_max,
       low: temp_min,
       humidity,
       timezone,
   }
   console.log(response.data);
   dispatch({
    type: types.UPDATE_CURRENT_WEATHER,
    payload: relevantInfo,
   });
  } catch (error) {
   console.log(error.response.data);
  }
 };
};
