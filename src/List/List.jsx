import "./List.css";

export function List({ activities, isGoodWeather, onDeleteActivity }) {
  const filteredActivities = activities.filter((activity) => {
    return activity.isForGoodWeather === isGoodWeather;
  });

  return (
    <section className="list-item">
      <h2>
        {isGoodWeather
          ? "The Weather is great! Get out there and:"
          : "Oopsieee!! Bad Weather outside... Here's what u can do:"}
      </h2>

      <ul className="list-item__unordered-list">
        {filteredActivities.map((activity) => (
          <li className="list-item__list" key={activity.id}>
            {activity.name}
            <button
              className="list-item__list-button"
              onClick={() => onDeleteActivity(activity.id)}
            >
              ╳
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
