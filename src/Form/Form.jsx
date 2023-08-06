import "./Form.css";

export function Form({ onAddActivity, activities }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;

    const name = form.elements.activityName.value;
    const isForGoodWeather = form.elements.weatherCheckbox.checked;

    const isActivityPresent = activities.some(
      (activity) =>
        activity.name.toLowerCase() === name.toLowerCase() &&
        activity.isForGoodWeather === isForGoodWeather
    );

    if (!isActivityPresent) {
      onAddActivity({ name: name, isForGoodWeather: isForGoodWeather });
      form.reset();
      form.elements.activityName.focus();
    } else {
      const messageElement = document.getElementById("activity-message");
      messageElement.innerText = "Activity already available!";
      setTimeout(() => (messageElement.innerText = ""), 3000);
    }
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
      <p className="error-message" id="activity-message"></p>
    </form>
  );
}
