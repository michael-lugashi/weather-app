import React, { useState} from 'react';
import { useDispatch } from 'react-redux';
import { updateWeather } from '../app/actions';



function InputCity(props) {
 const [typedCountry, setTypedCountry] = useState('');
 const dispatch = useDispatch();
 return (
  <div>
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

export default InputCity;
