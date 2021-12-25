import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateWeather } from '../app/actions';
import { useRef } from 'react';
import { allCountries } from '../model/allCountries';

function InputCity() {
 const submitBtn = useRef(null);
 const [typedCountry, setTypedCountry] = useState('London');
 const dispatch = useDispatch();

 useEffect(() => {
  submitBtn.current.click();
 }, []);

 return (
  <div className="input-container">
   <input
    className="place-input"
    list="places"
    type="text"
    value={typedCountry}
    onChange={(e) => {
     setTypedCountry(e.target.value);
    }}
   />

   <datalist id="places">
    {allCountries.map((place) => {
     return <option value={place}></option>;
    })}
   </datalist>

   <button
    className="place-btn"
    ref={submitBtn}
    onClick={() => {
     dispatch(updateWeather(typedCountry));
    }}
   >
    See Conditions
   </button>
  </div>
 );
}

export default InputCity;
