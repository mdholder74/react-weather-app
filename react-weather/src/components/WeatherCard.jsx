import React from 'react';
import { useState, useEffect } from 'react';


const VITE_APP_ID = import.meta.env.VITE_APP_ID || "0ba97a7a56972e55c9def754764a16fc";


export default function WeatherCard({ title }) {

  const [weatherData, setWeatherData] = useState(null);

  const search = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${VITE_APP_ID}`;

      const response = await fetch(url);
      const data = await response.json();

      if (data.cod !== 200) {
        throw new Error(data.message);
      }

      setWeatherData({
        location: data.name,
        temp: Math.floor(data.main.temp),
        feels_like: Math.floor(data.main.feels_like),
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        pressure: data.main.pressure,
      });
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  useEffect(() => {
    search("Charlotte");
  }, []);

  return (
    <div className="weather-card">
      <h2>{title}</h2>
      {title === "Weather Data" && weatherData && (
        <>
          <div className="weather-card-data">
            <p>Current Weather</p>
            <p>{weatherData.location}</p>
          </div>
          <div className="weather-card-data">
            <h2>{weatherData.temp}°</h2>
            <p>Feels Like {weatherData.feels_like}°</p>
          </div>
          <div className="weather-card-updates">
            <div>
              <p className="updates">Humidity</p>
              <p>{weatherData.humidity}%</p>
            </div>
            <div>
              <p className="updates">Wind Speed</p>
              <p>{weatherData.windSpeed} mph</p>
            </div>
            <div>
              <p className="updates">Pressure</p>
              <p>{weatherData.pressure}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}


