import "./WeatherFetch.css";
import { useState, useEffect } from "react";

export function WeatherFetch({ weather, setWeather }) {
  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await fetch(
          "https://example-apis.vercel.app/api/weather"
        );
        // if (!response.ok) {
        //   setWeather("Loading...");
        // }
        const data = await response.json();

        setWeather(data);
      } catch (error) {
        console.error("Error fetching the weather data", error);
        setWeather(null);
      }
    }

    fetchWeather();

    const intervalId = setInterval(fetchWeather, 5000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    console.log("weather in wather fetch", weather);
  }, [weather]);

  return (
    <section className="weather-section">
      {weather.temperature ? (
        <h1 className="weather-section__heading">
          {weather.condition} {weather.temperature}°C
        </h1>
      ) : (
        <h2 className="weather-section__heading">Loading Weather...</h2>
      )}
    </section>
  );
}
