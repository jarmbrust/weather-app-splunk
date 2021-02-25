import React, { useEffect, useState } from 'react';
import { CurrentForcast } from './CurrentForcast';
import { formatDateTime } from './../utilityFunctions';
import { TimeForcast } from './TimeForcast';

export const WeatherPage = () => {

  const [resultsOneCall, setResultsOneCall] = useState([]);
  const [currentIcon, setCurrentIcon] = useState('')
  const [currentWeather, setCurrentWeather] = useState('')
  const [currentTemp, setCurrentTemp] = useState('');
  const [hourlyTemps, setHourlyTemps] = useState([]);
  const [dailyTemps, setDailyTemps] = useState([]);
  const [formattedTime, setFormattedTime] = useState('');

  // lattude and longitude of Longmont, CO
  const lat = '40.18661770024102';
  const lon = '-105.11150146759199';

  // eslint-disable-next-line no-undef
  const urlOneCall = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`;

  useEffect(() => {
    fetch(urlOneCall)
      .then(result => result.json())
      .then(
        data => setResultsOneCall(data),
        error => {
          console.log(error)
        }
      )
  }, [urlOneCall]);

  console.log('items', resultsOneCall)

  useEffect(() => {
    if (resultsOneCall) {
      setDailyTemps(resultsOneCall.daily);
    }
    if (resultsOneCall.hourly) {
      setHourlyTemps(Object.entries(resultsOneCall.hourly));
    }
    if (resultsOneCall.current) {
      setCurrentIcon(`http://openweathermap.org/img/w/${resultsOneCall.current.weather[0].icon}.png`);
      setCurrentWeather(resultsOneCall.current.weather[0].description)
      setCurrentTemp(resultsOneCall.current.temp);
      setFormattedTime(formatDateTime(resultsOneCall.current.dt, 'dateTimeLong'))
    }
  }, [resultsOneCall]);

  return (
    <>
      <CurrentForcast 
        currentIcon={currentIcon}
        dayTime={formattedTime}
        currentWeather={currentWeather}
        currentTemp={currentTemp}
      />
      <TimeForcast 
        hourlyTemps={hourlyTemps}
      />
    </>
  );
};
