import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import ForecastCard from "./components/ForecastCard";
import Footer from "./components/Footer";


function App() {
  return (
    <main className="container">
      <Header />
      <SearchBar />
      <section className="main-content">
        <WeatherCard title="Weather Data" />
        <WeatherCard title="Map" />
      </section>
      <section className="forecast-cards">
        <ForecastCard />
      </section>
      <Footer />
    </main>
  );
}

export default App;
