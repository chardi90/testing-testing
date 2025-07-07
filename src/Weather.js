import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function SearchEngine() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    getWeather();
  }

  function getWeather() {
    const apiKey = `a2t477eebb3f98daaa0d6cf85ob51907`;
    const units = "metric";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;

    axios.get(apiUrl).then((response) => {
      setWeatherData({
        temperature: response.data.temperature.current,
        description: response.data.condition.description,
        humidity: response.data.temperature.humidity,
        wind: response.data.wind.speed,
        icon: response.data.condition.icon_url,
      });
    });
  }

  return (
    <div className="SearchEngine">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city"
          onChange={updateCity}
          autoFocus
        />
        <input type="submit" value="Search" />
      </form>

      {weatherData && weatherData.temperature && (
        <div>
          <p>In {city} today:</p>
          <ul>
            <li>Temperature: {weatherData.temperature}°C</li>
            <li>Weather: {weatherData.description}</li>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind} km/h</li>
            <li>
              <img src={weatherData.icon} alt="Current Weather" />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
