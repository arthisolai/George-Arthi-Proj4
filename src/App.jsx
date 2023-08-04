import { useState } from "react";
import "./App.css";
import { Form } from "./Form/Form.jsx";
import { uid } from "uid";

function App() {
  const [activities, setActivities] = useState([]);

  function handleAddActivity(activity) {
    console.log(activity);
    const newActivity = { id: uid(), ...activity };
    setActivities([...activities, newActivity]);
  }

  return (
    <>
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
