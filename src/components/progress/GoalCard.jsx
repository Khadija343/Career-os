function GoalCard({ goal, status }) {
  const icon =
    status === "completed"
      ? "✅"
      : status === "current"
      ? "🟡"
      : "⬜";

  return (
    <div className="bg-card border border-white/5 rounded-xl shadow-md shadow-black/20 p-4 mb-4 hover:border-white/10 transition">

      <h3 className="text-lg font-medium text-white/80">
        {icon} {goal}
      </h3>

    </div>
  );
}

export default GoalCard;
