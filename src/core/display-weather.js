// import axios from 'axios';
import React from 'react';
import { useSelector } from 'react-redux';

function DisplayWeather(props) {
 const { currentTemp, high, low, humidity, wind, cityName, weather } =
  useSelector((state) => state);

 const convertToCelsius = (kelvin) => {
  return Math.round(kelvin - 273.15);
 };

 const convertToFahrenheit = (kelvin) => {
  return Math.round((kelvin - 273.15) * 1.8 + 32);
 };

 const formatTemp = (temp) => {
  return `${convertToCelsius(temp)}°C | ${convertToFahrenheit(temp)}°F`;
 };

 return cityName ? (
  <div>
   <h2>{cityName}</h2>
   <span>Temperature: {formatTemp(currentTemp)}</span>
   <br />
   <span>High: {formatTemp(high)}</span>
   <br />
   <span>Low: {formatTemp(low)}</span>
   <br />
   <span>Humidity: {humidity}%</span>
   <br />
   <span>Wind: {wind} km/h</span>
   <br />
   <span>Weather: {weather}</span>
  </div>
 ) : null;
}

export default DisplayWeather;
