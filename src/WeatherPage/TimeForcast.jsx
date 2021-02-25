import React, { useEffect, useState } from 'react';
import './WeatherPage.scss';
import { formatDateTime, kelvinToFahrenheit } from './../utilityFunctions';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';

export const TimeForcast = ({hourlyTemps}) => {
  const [timesArray, setTimesArray] = useState([]);

  useEffect(() => {
    if (hourlyTemps.length > 0) {
      setTimesArray(
        [hourlyTemps[1][1], hourlyTemps[4][1], hourlyTemps[7][1], hourlyTemps[10][1], 
        hourlyTemps[13][1], hourlyTemps[16][1], hourlyTemps[19][1], hourlyTemps[22][1]],
      );
    }
  }, [hourlyTemps]);
  
  const cssTempBar = temp => {
    const fTemp = kelvinToFahrenheit(temp) * 3; // the x3 is for visualization
    const tempBarStyles = {
      backgroundImage: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,50,121,1) 50%, rgba(255,27,0,1) 100%)',
      width: `${fTemp}px`,
      height: '18px',
      position: 'absolute',
      margin: '5px 2px 2px 5px',
      textAlign: 'left',
      color: '#fff',
      paddingLeft: '5px',
      fontSize: '12px',
    }
    return tempBarStyles;
  }

  return (
    <Container className="timeline">
      {timesArray.map((times, i) => {
          return <Row key={i} >
            <Col className="times">{`${formatDateTime(times.dt)}: `}</Col>
            <Col>
              <span className="temps" style={cssTempBar(times.temp)}>
                {kelvinToFahrenheit(times.temp)}&#176;
              </span>
            </Col>
          </Row>
        })}
    </Container>
  );
};

TimeForcast.propTypes = {
  hourlyTemps: PropTypes.array.isRequired,
};
