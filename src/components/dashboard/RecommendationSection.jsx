import { Sparkles } from "lucide-react";

function RecommendationSection() {
  const recommendations = [
    "Improve Resume Summary",
    "Add More GitHub Projects",
    "Learn Docker Basics",
    "Practice DSA Daily",
  ];

  return (
    <div className="rounded-2xl border border-white/5 bg-card p-6 shadow-lg shadow-black/20">
      <h2 className="mb-5 flex items-center gap-2 text-xl font-bold text-white">
        <Sparkles size={20} className="text-primary" />
        AI Recommendations
      </h2>

      <div className="space-y-3">
        {recommendations.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between gap-3 rounded-xl bg-primary/10 p-4 transition-colors hover:bg-primary/15"
          >
            <span className="text-sm font-medium text-white sm:text-base">{item}</span>

            <span className="shrink-0 text-xs font-semibold text-primary sm:text-sm">
              High Priority
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecommendationSection;
