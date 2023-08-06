import useLocalStorageState from "use-local-storage-state";
import "./App.css";
import { Form } from "./Form/Form.jsx";
import { uid } from "uid";
import { useState, useEffect } from "react";
import { List } from "./List/List";
import { WeatherFetch } from "./Fetch/WeatherFetch";

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
    <section>
      <WeatherFetch weather={weather} setWeather={setWeather} />
      <List
        activities={activities}
        isGoodWeather={weather.isGoodWeather}
        onDeleteActivity={handleDeleteActivity}
      />
      <Form onAddActivity={handleAddActivity} />
    </section>
  );
}
export default App;
