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

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await fetch(
          "https://example-apis.vercel.app/api/weather"
        );
        const data = await response.json();

        setWeather(data);
      } catch (error) {
        console.error("Error fetching the weather data", error);
      }
    }

    fetchWeather();

    const intervalId = setInterval(fetchWeather, 5000);

    return () => clearInterval(intervalId);
  }, []);

  console.log(weather);

  function handleAddActivity(activity) {
    console.log(activity);
    const newActivity = { id: uid(), ...activity };
    setActivities([...activities, newActivity]);
  }

  function handleDeleteActivity(id) {
    setActivities(activities.filter((activity) => activity.id !== id));
  }

  return (
    <>
      {weather ? (
        <h1>
          {weather.condition} {weather.temperature}°C
        </h1>
      ) : (
        <h2>Loading Weather...</h2>
      )}
      <List
        activities={activities}
        isGoodWeather={weather.isGoodWeather}
        onDeleteActivity={handleDeleteActivity}
      />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}
export default App;
