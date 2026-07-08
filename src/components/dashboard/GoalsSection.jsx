import { Target } from "lucide-react";

function GoalsSection() {
  const goals = [
    "Complete Resume",
    "Push 3 GitHub Projects",
    "Learn Tailwind CSS",
    "Build Portfolio Website",
  ];

  return (
    <div className="rounded-2xl border border-white/5 bg-card p-6 shadow-lg shadow-black/20">
      <h2 className="mb-5 flex items-center gap-2 text-xl font-bold text-white">
        <Target size={20} className="text-success" />
        Upcoming Goals
      </h2>

      <div className="space-y-3">
        {goals.map((goal, index) => (
          <div
            key={index}
            className="flex items-center justify-between gap-3 rounded-xl bg-success/10 p-4 transition-colors hover:bg-success/15"
          >
            <span className="text-sm font-medium text-white sm:text-base">{goal}</span>

            <span className="shrink-0 text-xs font-semibold text-success sm:text-sm">
              Pending
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GoalsSection;
