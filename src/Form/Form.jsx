import "./Form.css";

export function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;

    const name = form.elements.activityName.value;
    const isForGoodWeather = form.elements.weatherCheckbox.checked;

    onAddActivity({ name: name, isForGoodWeather: isForGoodWeather });
    form.reset();
    form.elements.activityName.focus();
  }

  return (
    <form className="activity-form" onSubmit={handleSubmit}>
      <h1 className="activity-form__heading">Add new activity :</h1>
      <div className="activity-form__activity-name">
        <label htmlFor="activityName"></label>
        <input
          type="text"
          name="activityName"
          placeholder="Enter new activity..."
          required
        />
      </div>
      <div>
        <label
          className="activity-form__checkbox-label"
          htmlFor="weatherCheckbox"
        >
          Good-Weather Activity :{" "}
        </label>
        <input type="checkbox" name="weatherCheckbox" />
      </div>
      <button className="activity-form__add-button" type="submit">
        Add
      </button>
    </form>
  );
}
