import React from 'react';
import { useState, useEffect } from 'react';
import SearchBar from './SearchBar';

const VITE_APP_ID = import.meta.env.VITE_APP_ID || "0ba97a7a56972e55c9def754764a16fc";


export default function WeatherCard({ headingTitle }) {//accepts a headingTitle prop and updates the headingTitle of the card based on the prop value

  //this is the state that will hold the weather data and the function to update the state. state is initialized to null meaning no data is available
  const [weatherData, setWeatherData] = useState(null);

  const search = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${VITE_APP_ID}`;

      const response = await fetch(url);
      const data = await response.json();

      if (data.cod !== 200) {
        throw new Error(data.message);
      }
      //update the weatherData state with weather data from the API
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
    search("Charlotte");//fetch the weather data for Charlotte when the component mounts
  }, []);//empty dependency array to ensure the API call is only made once when the component mounts

  return (
    <div className="weather-card">
      <h1 className="headingTitleFont">{headingTitle}</h1>
      <SearchBar search={search} />

      {headingTitle === "TODAY'S WEATHER" && weatherData && (//check if the headingTitle is "Weather Data" and the weatherData state is not null
        <>
          <div className="weather-card-data">
            <p className="cityFont">{weatherData.location}</p>
          </div>
          <div className="weather-card-data">
            <p className="tempFont">{weatherData.temp}°</p>
            <p>Feels Like {weatherData.feels_like}°</p>
          </div>
          <div className="weather-card-updates">
            <div>
              <p className="updates">Humidity</p>
              <p className="updates2">{weatherData.humidity}%</p>
            </div>
            <div>
              <p className="updates">Wind Speed</p>
              <p className="updates2">{weatherData.windSpeed} mph</p>
            </div>
            <div>
              <p className="updates">Pressure</p>
              <p className="updates2">{weatherData.pressure}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}


