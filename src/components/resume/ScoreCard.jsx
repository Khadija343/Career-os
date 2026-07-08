import { TrendingUp, ArrowUpRight } from "lucide-react";

import AnimatedNumber from "../ui/AnimatedNumber";

function ScoreCard({ title, score, suffix = "%" }) {
  const numericScore = parseInt(score, 10) || 0;

  return (
    <div className="h-full rounded-2xl bg-gradient-to-br from-primary to-secondary p-6 text-white shadow-xl shadow-black/20 transition-transform duration-300 hover:-translate-y-0.5">

      <div className="flex items-start justify-between">

        <div>

          <h3 className="text-sm font-medium text-white/80">
            {title}
          </h3>

          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            <AnimatedNumber value={numericScore} />{suffix}
          </h2>

          <p className="mt-2 text-sm text-white/80">
            Excellent Performance
          </p>

        </div>

        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15">
          <TrendingUp size={24} />
        </div>

      </div>

      {suffix === "%" && (
        <div className="mt-5 inline-flex items-center gap-1 rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold">
          <ArrowUpRight size={14} />
          +5% this week
        </div>
      )}

    </div>
  );
}

export default ScoreCard;
