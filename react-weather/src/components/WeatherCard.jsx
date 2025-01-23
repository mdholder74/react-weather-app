import React from 'react'
import { useEffect, useState } from 'react'
import clear_icon from '../assets/clear.png'
import cloudy_icon from '../assets/cloudy.png'
import drizzle_icon from '../assets/drizzle.png'
import humidity_icon from '../assets/humidity.png'
import rain_icon from '../assets/rain.png'
import search_icon from '../assets/search.png'
import snow_icon from '../assets/snow.png'
import wind_icon from '../assets/wind.png'

export default function WeatherCard({ title }) {

  const [weatherData, setWeatherData] = useState(false)

  const weatherIcons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloudy_icon,
    "02n": cloudy_icon,
    "03d": cloudy_icon,
    "03n": cloudy_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon,
  }

  const search = async (city) => {
    try {
      const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${import.meta.env.VITE_APP_ID}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      const weatherIcon = weatherIcons[data.weather[0].icon] || clear_icon;
      setWeatherData({
        location: data.name,
        temp: Math.floor(data.main.temp),
        feels_like: data.main.feels_like,
        humidity: data.main.humidity,
        wind_speed: data.wind.speed,
        pressure: data.main.pressure,
        dew_point: data.main.dew_point,
        icon: weatherIcon,
        
      });
  }
  catch (error) {
    console.error(error)
  }
}

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
            {/* <img src={cloudy_icon} alt="Weather Icon" /> */}
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
              <p>{weatherData.dew_point}°</p>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
