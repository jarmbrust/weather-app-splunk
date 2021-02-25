import React from 'react';
import './WeatherPage.scss';
import { kelvinToFahrenheit } from './../utilityFunctions';
import PropTypes from 'prop-types';

export const CurrentForcast = ({currentIcon, dayTime, currentWeather, currentTemp}) => {
  return(
    <>
      <div className="location-wrapper">
        <h2 className="city-heading">Longmont, CO</h2>
        <div className="day-time">{dayTime}</div>
        <div className="current-weather">{currentWeather}</div>
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

CurrentForcast.propTypes = {
  currentIcon: PropTypes.any.isRequired,
  dayTime: PropTypes.string.isRequired,
  currentWeather: PropTypes.string.isRequired,
  currentTemp: PropTypes.number.isRequired,
};
