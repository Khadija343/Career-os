function GoalsSection() {
  const goals = [
    "Complete Resume",
    "Push 3 GitHub Projects",
    "Learn Tailwind CSS",
    "Build Portfolio Website",
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mt-10">
      <h2 className="text-2xl font-bold mb-5">
        🎯 Upcoming Goals
      </h2>

      <div className="space-y-4">
        {goals.map((goal, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-green-50 rounded-xl p-4 hover:bg-green-100 transition"
          >
            <span>{goal}</span>

            <span className="text-green-600 font-semibold">
              Pending
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GoalsSection;