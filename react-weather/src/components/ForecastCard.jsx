import React, { useState, useEffect } from 'react';

const VITE_APP_ID = import.meta.env.VITE_APP_ID || "0ba97a7a56972e55c9def754764a16fc";

//Fetching 5 Day Weather Data function
export default function ForecastCard() {
  
  //forecastData stores the forecast data and setForecastData updates the state with new weather data
  const [forecastData, setForecastData] = useState([]);//useState to store the forecast data

  const fetchWeather = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${VITE_APP_ID}`;
      
      const response = await fetch(url);
      const data = await response.json();

      if (data.cod !== "200") { //using the cod property in the JSON response if the response code is not 200, throw an error 
        throw new Error(data.message);
      }

      const dailyForecast = [];//create an empty array to store the daily forecast data
      const duplicateDates = new Set();//create a new Set to store the dates

      data.list.forEach((item) => {
        const date = new Date(item.dt * 1000).toLocaleDateString();//convert the date to a string
        if (!duplicateDates.has(date)) {//check if the date is not in the Set 
          duplicateDates.add(date);//add the first forecast item for the day to the Set
          dailyForecast.push(item);//push the first forecast item for the day to the dailyForecast array
        }
      });

      setForecastData(dailyForecast.slice(0, 5));//update the forecastData state with the first 5 items in the dailyForecast array
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  //Triggering the API Call
  useEffect(() => {
    fetchWeather("Charlotte");//fetch the weather data for Charlotte when the component mounts
  }, []);//empty dependency array to ensure the API call is only made once when the component mounts

  return (
    <div className="forecast-card">
      <h1>5- DAY WEATHER FORECAST</h1>
      {forecastData.length > 0 ? (
        <div className='forecast-details'>
          {forecastData.map((day, index) => (
            <div key={index} className="forecast-item">
              <p className="forecast-link-date">{new Date(day.dt * 1000).toLocaleDateString()}</p>
              <p className="forecast-link-temp">Temp: {Math.floor(day.main.temp)}°F</p>
              <p className="forecast-link-humidity">Humidity: {day.main.humidity}%</p>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
