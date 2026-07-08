import { Target } from "lucide-react";

function CurrentGoal({ goal, progress }) {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-primary to-secondary p-6 text-white shadow-lg shadow-black/20 sm:p-8">
      <h2 className="flex items-center gap-2 text-sm font-medium text-white/80">
        <Target size={18} />
        Current Goal
      </h2>

      <h1 className="mt-2 text-2xl font-bold sm:text-3xl">
        {goal}
      </h1>

      <div className="mt-5 flex items-center justify-between text-sm text-white/80">
        <span>Progress</span>
        <span className="font-semibold">{progress}%</span>
      </div>

      <div className="mt-2 h-2.5 w-full rounded-full bg-white/20">
        <div
          className="h-2.5 rounded-full bg-white transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}

export default CurrentGoal;
