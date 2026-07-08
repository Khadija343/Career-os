function ActivityCard({ activity, date }) {
  return (
    <div className="bg-card border border-white/5 rounded-xl shadow-md shadow-black/20 p-4 mb-4">

      <h3 className="font-semibold text-white">
        {activity}
      </h3>

      <p className="text-white/50 mt-1">
        {date}
      </p>

    </div>
  );
}

export default ActivityCard;
