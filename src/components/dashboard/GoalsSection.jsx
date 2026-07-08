function GoalsSection() {
  const goals = [
    "Complete Resume",
    "Push 3 GitHub Projects",
    "Learn Tailwind CSS",
    "Build Portfolio Website",
  ];

  return (
    <div className="bg-card border border-white/5 rounded-2xl shadow-lg shadow-black/20 p-6 mt-10">
      <h2 className="text-2xl font-bold mb-5 text-white">
        🎯 Upcoming Goals
      </h2>

      <div className="space-y-4">
        {goals.map((goal, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-success/10 rounded-xl p-4 hover:bg-success/15 transition"
          >
            <span className="text-white">{goal}</span>

            <span className="text-success font-semibold">
              Pending
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GoalsSection;
