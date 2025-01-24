import React from 'react';
import { useState, useEffect } from 'react';

const VITE_APP_ID = import.meta.env.VITE_APP_ID || "0ba97a7a56972e55c9def754764a16fc";

export default function ForecastCard() {

  const [weatherData, setWeatherData] = useState(false);

    const fetchWeather = async (city) => {
      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=Charlotte&units=imperial&appid=${VITE_APP_ID}`;
        
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod !== 200) {
          throw new Error(data.message);
        }

        setWeatherData({
          location: data.name,
          tempMax: Math.floor(data.main.temp_max),
          tempMin: Math.floor(data.main.temp_min),
        });
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    useEffect(() =>{
      fetchWeather("Charlottle")
    }, [])
 

    return (
      <div className="forecast-card">
        <div className="forecast-card-header">
        <p>{new Date().toLocaleDateString()}</p> 
        <p>{new Date().toLocaleDateString('en-US', { weekday: 'long' })}</p> 
        </div>
        <div>
          <p>{weatherData.location}</p>
          <p>{weatherData.tempMax}°</p>
          <p>{weatherData.tempMin}°</p>
        </div>
      </div>
    );
  };
