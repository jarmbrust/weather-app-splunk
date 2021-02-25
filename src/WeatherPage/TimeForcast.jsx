import React, { useEffect, useState } from 'react';
import './WeatherPage.scss';
import { formatDateTime, kelvinToFahrenheit } from './../utilityFunctions';

export const TimeForcast = ({hourlyTemps}) => {

  const [timesArray, setTimesArray] = useState([]);

  useEffect(() => {
    if (hourlyTemps.length > 0) {
      console.log(hourlyTemps)
      setTimesArray(
        [hourlyTemps[1][1], hourlyTemps[4][1], hourlyTemps[7][1], hourlyTemps[10][1], 
        hourlyTemps[13][1], hourlyTemps[16][1], hourlyTemps[19][1], hourlyTemps[22][1]]
      );
    }
  }, [hourlyTemps])
  
  


  const cssTempBar = temp => {
    const fTemp = kelvinToFahrenheit(temp) *3;

    

    const width = {
      backgroundImage: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,50,121,1) 50%, rgba(255,27,0,1) 100%)',
      width: `${fTemp}px`,
      height: '12px',
      position: 'absolute',
      margin: '5px 2px 2px 2px',
    }

    return width;
  }
//style={{with: '100%', backgroundColor: '#ddd'}}>

  return (
    <>
    <div className="timeline">
      {timesArray.map((times, i) => {
          return <div key={i} >
            <span className="times">{`${formatDateTime(times.dt)}: `}<span classNames="temps" style={cssTempBar(times.temp)} />
            </span>
          </div>;
        })}
    </div>

    
      {/* <div >
        {timesArray.map((times, i) => {
          return <div key={i} ><span>{`${formatDateTime(times.dt)}:`}<span style={cssTempBar(times.temp)} /></span></div>;
        })}
      </div> */}



    </>
  );
};
