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
   <h2 className='city-name'>{cityName}</h2>

   <div className="stat-container">
    <span className="stat1">Temperature: {formatTemp(currentTemp)}</span>
    <span className="stat2">High: {formatTemp(high)}</span>
    <span className="stat3">Low: {formatTemp(low)}</span>
    <span className="stat4">Humidity: {humidity}%</span>
    <span className="stat5">Wind: {wind} km/h</span>
    <span className="stat6">Weather: {weather}</span>
   </div>
  </div>
 ) : null;
}

export default DisplayWeather;
