import React, { useState, useEffect } from 'react';

const VITE_APP_ID = import.meta.env.VITE_APP_ID || "0ba97a7a56972e55c9def754764a16fc";

export default function ForecastCard() {
  const [forecastData, setForecastData] = useState(null); 

  const fetchWeather = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${VITE_APP_ID}`;
      
      const response = await fetch(url);
      const data = await response.json();

      if (data.cod !== "200") {  
        throw new Error(data.message);
      }

      setForecastData(data.list.slice(0, 5));
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  useEffect(() => {
    fetchWeather("Charlotte");
  }, []);

  return (
    <div className="forecast-card">
        <h1>5- DAY WEATHER FORECAST</h1>
      {forecastData ? (
        <div className='forecast-details'>
          {forecastData.map((day, index) => (
            <div key={index} className="forecast-item">
              <p>{new Date(day.dt * 1000).toLocaleDateString()}</p>
              <p>Temp: {Math.floor(day.main.temp)}°</p>
              <p>Humidity: {day.main.humidity}%</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading forecast data...</p>
      )}
    </div>
  );
}
