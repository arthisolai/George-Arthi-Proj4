import useLocalStorageState from "use-local-storage-state";
import "./App.css";
import { Form } from "./Form/Form.jsx";
import { uid } from "uid";
import { useState, useEffect } from "react";
import { List } from "./List/List";
import { WeatherFetch } from "./Fetch/Fetch";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  const [weather, setWeather] = useState({});

  function handleAddActivity(activity) {
    const newActivity = { id: uid(), ...activity };
    setActivities([...activities, newActivity]);
  }

  function handleDeleteActivity(id) {
    setActivities(activities.filter((activity) => activity.id !== id));
  }

  return (
    <>
      <WeatherFetch setWeather={setWeather} />
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
