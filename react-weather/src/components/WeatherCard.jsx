import React from 'react'

export default function WeatherCard({ title }) {
  return (
    <div className="weather-card">
      <h2>{title}</h2>
      {title === "Weather Data" && (
        <>
          <div className="weather-card-data">
            <p>Current Weather</p>
            <p>Time</p>
          </div>
          <div className="weather-card-data">
            <img src="" alt="Weather Icon" />
            <p>Temp Degree</p>
            <p>Feels Like</p>
          </div>
          <div className="weather-card-updates">
            <p className="updates">Humidity</p>
            <p className="updates">Wind</p>
            <p className="updates">Air Quality</p>
            <p className="updates">Pressure</p>
            <p className="updates">Dew Point</p>
          </div>
        </>
      )}
    </div>
  )
}
