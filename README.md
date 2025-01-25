# Weather App

## **Description**
Provide weather data for all cities in the United States. It also forecasts weather data five days out from the current date.

## **Technologies Used**
- **HTML**: For structuring the web pages.
- **CSS**: For styling the web pages and ensuring responsiveness.
- **JavaScript**: For adding interactivity and dynamic content.
- **Framework/Library**:  React
- **Backend Technology**: Node.js, Express

## **Explanations of the Approach Taken**
This weather app is built using **React** and integrates with the **OpenWeather API**. The app is designed with a **component-based architecture**, where key features are split across separate components for better maintainability:
- **WeatherCard**: Displays current weather data.
- **ForecastCard**: Displays a 5-day weather forecast.
- **SearchBar**: Allows users to search for weather data by city.

### **Key Concepts**
- **State Management**: The app uses **React’s `useState`** to manage the state for current weather (`weatherData`) and forecast (`forecastData`).
- **Data Fetching**: The app makes asynchronous API calls using **`async/await`** to fetch data from the OpenWeather API. It uses **`useEffect`** to trigger data fetching when the app loads.
- **Conditional Rendering**: The app checks if `weatherData` is available before rendering the weather details and similarly renders the forecast once data is fetched.
- **Error Handling**: If an API request fails, the app logs the error to the console, ensuring the app doesn't crash.

## **Usage Instructions**
1. To clone this repository, use the following command in your terminal: ```bash
2. cd react-weather-app, npm install, npm start
3. Open a port and test in browser example http://localhost:3000



