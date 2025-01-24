import React, { useState, useEffect } from 'react';

export default function ForecastCard() {
  const [weatherData, setWeatherData] = useState(false);

  useEffect(() => {
    async function fetchWeather() {
      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=Charlotte&units=imperial&appid=${import.meta.env.VITE_APP_ID}`;
        const response = await fetch(url);
        const data = await response.json();
        setWeatherData({
          location: data.name,
          tempMax: Math.floor(data.main.temp_max),
          tempMin: Math.floor(data.main.temp_min),
        });
      } catch (error) {
        console.error(error);
      }
    }
    fetchWeather();
  }, []);

    return (
      <div className="forecast-card">
        <div className="forecast-card-header">
        <p>{new Date().toLocaleDateString()}</p> 
        <p>{new Date().toLocaleDateString('en-US', { weekday: 'long' })}</p> 
        </div>
        <div>
          <img src="" alt="Weather Icon" />
          <img src="" alt="Additional Weather Icon" />
          <p>{weatherData.tempMax}°</p>
          <p>{weatherData.tempMin}°</p>
        </div>
      </div>
    );
  };
