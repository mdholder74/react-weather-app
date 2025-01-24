import React, { useState, useEffect } from 'react';

const VITE_APP_ID = import.meta.env.VITE_APP_ID || "0ba97a7a56972e55c9def754764a16fc";

export default function ForecastCard() {
  const [forecastData, setForecastData] = useState([]); 

  const fetchWeather = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${VITE_APP_ID}`;
      
      const response = await fetch(url);
      const data = await response.json();

      if (data.cod !== "200") {  
        throw new Error(data.message);
      }

      const dailyForecast = [];
      const seenDates = new Set();

      data.list.forEach((item) => {
        const date = new Date(item.dt * 1000).toLocaleDateString();
        if (!seenDates.has(date)) {
          seenDates.add(date);
          dailyForecast.push(item);
        }
      });

      setForecastData(dailyForecast.slice(0, 5));
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
      {forecastData.length > 0 ? (
        <div className='forecast-details'>
          {forecastData.map((day, index) => (
            <div key={index} className="forecast-item">
              <p>{new Date(day.dt * 1000).toLocaleDateString()}</p>
              <p>Temp: {Math.floor(day.main.temp)}°F</p>
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
