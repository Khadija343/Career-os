import { Trophy } from "lucide-react";

function MilestoneCard({ title }) {
  return (
    <div className="flex h-full items-center gap-3 rounded-xl border border-white/5 bg-card p-5 shadow-lg shadow-black/20 transition-colors hover:border-white/10">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
        <Trophy size={18} />
      </div>
      <h2 className="text-base font-semibold text-white">
        {title}
      </h2>
    </div>
  );
}

export default MilestoneCard;
