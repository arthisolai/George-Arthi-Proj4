export function List({ activities, isGoodWeather, onDeleteActivity }) {
  const filteredActivities = activities.filter((activity) => {
    return activity.isForGoodWeather === isGoodWeather;
  });

  return (
    <div>
      <h2>
        {isGoodWeather
          ? "The Weather is great! Get out there and:"
          : "Oopsieee!! Bad Weather outside... Here's what u can do:"}
      </h2>

      <ul>
        {filteredActivities.map((activity) => (
          <li key={activity.id}>
            {activity.name}
            <button onClick={() => onDeleteActivity(activity.id)}>╳</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
