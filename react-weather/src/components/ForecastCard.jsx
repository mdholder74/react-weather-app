import React from 'react'
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
      <p>23</p>
      <p>Thursday</p>
    </div>
    <div>
      {/* <img src={clear_icon} alt="Weather Icon" /> */}
      <img src="" alt="Additional Weather Icon" />
      <p>95°</p>
      <p>60°</p>
      <p>Mostly Cloudy</p>
    </div>
  </div>
  )
}
