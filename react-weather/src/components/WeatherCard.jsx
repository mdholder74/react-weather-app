import React from 'react'
import { useEffect } from 'react'
import clear_icon from '../assets/clear.png'
import cloudy_icon from '../assets/cloudy.png'
import drizzle_icon from '../assets/drizzle.png'
import humidity_icon from '../assets/humidity.png'
import rain_icon from '../assets/rain.png'
import search_icon from '../assets/search.png'
import snow_icon from '../assets/snow.png'
import wind_icon from '../assets/wind.png'

export default function WeatherCard({ title }) {

  const search = async (city) => {
    try {
      const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_APP_ID}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
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
            <p>Charlotte, NC</p>
          </div>
          <div className="weather-card-data">
            {/* <img src={cloudy_icon} alt="Weather Icon" /> */}
            <h2>54°</h2>
            <p>Feels Like 44°</p>
          </div>
          <div className="weather-card-updates">
            <div>
              <p className="updates">Humidity</p>
              <p>51%</p>
            </div>
            <div>
              <p className="updates">Wind</p>
              <p>5 mph</p>
            </div>
            <div>
              <p className="updates">Air Quality</p>
              <p>32</p>
            </div>
            <div>
              <p className="updates">Pressure</p>
              <p>30.2 in</p>
            </div>
            <div>
              <p className="updates">Dew Point</p>
              <p>40°</p>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
