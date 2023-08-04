import useLocalStorageState from "use-local-storage-state";
import "./App.css";
import { Form } from "./Form/Form.jsx";
import { uid } from "uid";

import { List } from "./List/List";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  const isGoodWeather = true;

  function handleAddActivity(activity) {
    console.log(activity);
    const newActivity = { id: uid(), ...activity };
    setActivities([...activities, newActivity]);
  }

  return (
    <>
      <List activities={activities} isGoodWeather={isGoodWeather} />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}
export default App;
