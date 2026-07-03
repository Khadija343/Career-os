function RecommendationSection() {
  const recommendations = [
    "Improve Resume Summary",
    "Add More GitHub Projects",
    "Learn Docker Basics",
    "Practice DSA Daily",
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mt-10">
      <h2 className="text-2xl font-bold mb-5">
        🤖 AI Recommendations
      </h2>

      <div className="space-y-4">
        {recommendations.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-blue-50 rounded-xl p-4 hover:bg-blue-100 transition"
          >
            <span>{item}</span>

            <span className="text-blue-600 font-semibold">
              High Priority
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecommendationSection;