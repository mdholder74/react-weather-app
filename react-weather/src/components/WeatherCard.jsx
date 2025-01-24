import React from 'react';
import { useState, useEffect } from 'react';


export default function WeatherCard({ title }) {

  const [weatherData, setWeatherData] = useState(false)

  const search = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${import.meta.env.VITE_APP_ID}`;
      const response = await fetch(url);
      const data = await response.json();
      if (data.weather && data.weather.length > 0) {
        const weatherIcon = weatherIcons[data.weather[0].icon];
        setWeatherData({
          location: data.name,
          temp: Math.floor(data.main.temp),
          tempMax: Math.floor(data.main.temp_max),
          tempMin: Math.floor(data.main.temp_min),
          feels_like: Math.floor(data.main.feels_like),
          humidity: data.main.humidity,
          wind_speed: data.wind.speed,
          pressure: data.main.pressure,
          dew_point: data.main.dew_point ? Math.floor(data.main.dew_point) : 'N/A',
        });
      } else {
        console.error('Weather data is not available');
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };
  
useEffect(() => {
  search("Charlotte")
}, [])

  return (
    <div className="weather-card">
      <h2>{title}</h2>
      {title === "Weather Data" && (
        <>
          <div className="weather-card-data">
            <p>Current Weather</p>
            <p>{weatherData.name}</p>
          </div>
          <div className="weather-card-data">
            <h2>{weatherData.temp}°</h2>
            <p>Feels Like {weatherData.feels_like}°</p>
          </div>
          <div className="weather-card-updates">
            <div>
              <p className="updates">Humidity</p>
              <p>{weatherData.humidity}</p>
            </div>
            <div>
              <p className="updates">Wind Speed</p>
              <p>{weatherData.wind_speed}</p>
            </div>
            <div>
              <p className="updates">Pressure</p>
              <p>{weatherData.pressure}</p>
            </div>
            <div>
              <p className="updates">Dew Point</p>
              <p>{weatherData.dew_point}</p>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

