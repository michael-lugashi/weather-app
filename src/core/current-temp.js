// import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateWeather } from '../app/actions';

function CurrentTemp(props) {
 const dispatch = useDispatch();
 const temp = useSelector((state) => state.temp);
 const country = useSelector((state) => state.country);
 const [typedCountry, setTypedCountry] = useState('');

 return (
  <div>
   <h2>{country}</h2>
   {temp}
   <button
    onClick={() => {
     dispatch(updateWeather());
    }}
   >
    update
   </button>
   <input
    onChange={(e) => {
     setTypedCountry(e.target.value);
    }}
   />
   <button
    // onClick={async () => {
    //  try {
    //   console.log(typedCountry);
    //   const response = (
    //    await axios.get(
    //     `https://api.openweathermap.org/data/2.5/weather?q=${typedCountry}&appid=6a8aa54584cb15d07b2b93f5d0945e96`
    //    )
    //   ).data;
    //   const { main } = response;
    //   console.log(main.temp);
    //   dispatch(updateWeather({ temp: main.temp }));
    //  } catch (error) {
    //   console.log(error.response.data);
    //  }
    // }}
    onClick={() => {
         dispatch(updateWeather(typedCountry));
       }}
   >
    request
   </button>
  </div>
 );
}

export default CurrentTemp;
