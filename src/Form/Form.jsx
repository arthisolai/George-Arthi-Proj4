export function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;

    const name = form.elements.activityName.value;
    const isForGoodWeather = form.elements.weatherCheckbox.checked;

    // console.log("name" = name,  "isForGoodWeather" = isForGoodWeather);
    onAddActivity({ name: name, isForGoodWeather: isForGoodWeather });
    form.reset();
    form.elements.activityName.focus();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add New Activity</h1>
      <div>
        <label>Name :</label>
        <input type="text" name="activityName" required />
      </div>
      <div>
        <input type="checkbox" name="weatherCheckbox" />
        <label>Good-Weather Activity:</label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
