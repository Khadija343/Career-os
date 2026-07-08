function RecommendationSection() {
  const recommendations = [
    "Improve Resume Summary",
    "Add More GitHub Projects",
    "Learn Docker Basics",
    "Practice DSA Daily",
  ];

  return (
    <div className="bg-card border border-white/5 rounded-2xl shadow-lg shadow-black/20 p-6 mt-10">
      <h2 className="text-2xl font-bold mb-5 text-white">
        🤖 AI Recommendations
      </h2>

      <div className="space-y-4">
        {recommendations.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-primary/10 rounded-xl p-4 hover:bg-primary/15 transition"
          >
            <span className="text-white">{item}</span>

            <span className="text-primary font-semibold">
              High Priority
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecommendationSection;
