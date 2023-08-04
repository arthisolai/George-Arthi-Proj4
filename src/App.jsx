import useLocalStorageState from "use-local-storage-state";
import "./App.css";
import { Form } from "./Form/Form.jsx";
import { uid } from "uid";

import { List } from "./List/List";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  function handleAddActivity(activity) {
    console.log(activity);
    const newActivity = { id: uid(), ...activity };
    setActivities([...activities, newActivity]);
  }

  return (
    <>
      <List activities={activities} />

      <Form onAddActivity={handleAddActivity} />
    </>
  );
}
export default App;
