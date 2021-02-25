import React from 'react';
import './WeatherPage.scss';
import { kelvinToFahrenheit } from './../utilityFunctions';

export const CurrentForcast = ({currentIcon, dayTime, currentWeather, currentTemp}) => {
  return(
    <>
      <div className='wrapper'>
        <h2 className="city-heading">Longmont, CO</h2>
        <div>{dayTime}</div>
        <div>{currentWeather}</div>
        <img
          src={currentIcon}
          alt="current-weather-icon"
          className="current-weather-icon"
        />
        <span className="current-temp">{kelvinToFahrenheit(currentTemp)}<span className="degrees">&#176;F</span></span>
      </div>
    </>
  );
};
