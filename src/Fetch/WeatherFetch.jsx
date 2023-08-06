import "./WeatherFetch.css";
import { useState, useEffect } from "react";

export function WeatherFetch({ weather, setWeather }) {
  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await fetch(
          "https://example-apis.vercel.app/api/weather"
        );
        if (!response.ok) {
          setWeather("Loading...");
        }
        const data = await response.json();

        setWeather(data);
      } catch (error) {
        console.error("Error fetching the weather data", error);
      }
    }

    fetchWeather();

    const intervalId = setInterval(fetchWeather, 5000);

    return () => clearInterval(intervalId);
  }, [setWeather]);

  return (
    <section className="weather-section">
      {weather ? (
        <h1 className="weather-section__heading">
          {weather.condition} {weather.temperature}°C
        </h1>
      ) : (
        <h2>Loading Weather...</h2>
      )}
    </section>
  );
}
