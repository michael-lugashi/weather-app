import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateWeather } from '../app/actions';
import { useRef } from 'react';

function InputCity(props) {
 const submitBtn = useRef(null);
 const [typedCountry, setTypedCountry] = useState('London');
 const dispatch = useDispatch();

 useEffect(() => {
  submitBtn.current.click();
 }, []);

 return (
  <div>
   <input
    type="text"
    value={typedCountry}
    onChange={(e) => {
     setTypedCountry(e.target.value);
    }}
   />
   <button
    ref={submitBtn}
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
