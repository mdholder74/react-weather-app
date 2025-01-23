import React from 'react'
import { useEffect, useState } from 'react'
import WeatherCard from './WeatherCard'
import clear_icon from '../assets/clear.png'
import cloudy_icon from '../assets/cloudy.png'
import drizzle_icon from '../assets/drizzle.png'
import humidity_icon from '../assets/humidity.png'
import rain_icon from '../assets/rain.png'
import search_icon from '../assets/search.png'
import snow_icon from '../assets/snow.png'
import wind_icon from '../assets/wind.png'

export default function ForecastCard() {
  return (
    <div className="forecast-card">
    <div className="forecast-card-header">
      <p>{new Date().toLocaleDateString()}</p> 
      <p>{new Date().toLocaleDateString('en-US', { weekday: 'long' })}</p> 
    </div>
    <div>
      <img src={weatherData.icon} alt="Weather Icon" />
      <p>{weatherData.tempMax}</p>
      <img src={weatherData.icon} alt="Weather Icon" />
      <p>{weatherData.tempMin}</p>
    </div>
  </div>
  )
}
