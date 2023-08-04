import useLocalStorageState from "use-local-storage-state";
import "./App.css";
import { Form } from "./Form/Form.jsx";
import { uid } from "uid";
import { useState, useEffect } from "react";
import { List } from "./List/List";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  const [weather, setWeather] = useState({});
  // const isGoodWeather = true;

  async function fetchWeather() {
    try {
      const response = await fetch(
        "https://example-apis.vercel.app/api/weather"
      );
      const data = await response.json();

      setWeather(data);
    } catch (error) {
      console.error("Error fetching the weather data:", error);
    }
  }

  useEffect(() => {
    fetchWeather();
  }, []);

  console.log(weather);

  function handleAddActivity(activity) {
    console.log(activity);
    const newActivity = { id: uid(), ...activity };
    setActivities([...activities, newActivity]);
  }

  return (
    <>
      {weather ? (
        <h2>
          {weather.condition} {weather.temperature}°C
        </h2>
      ) : (
        <h2>Loading Weather...</h2>
      )}
      <List activities={activities} isGoodWeather={weather.isGoodWeather} />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}
export default App;
