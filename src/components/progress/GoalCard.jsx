import { CheckCircle2, CircleDot, Circle } from "lucide-react";

const STATUS_CONFIG = {
  completed: { Icon: CheckCircle2, className: "text-success" },
  current: { Icon: CircleDot, className: "text-yellow-500" },
  pending: { Icon: Circle, className: "text-white/30" },
};

function GoalCard({ goal, status }) {
  const { Icon, className } = STATUS_CONFIG[status] || STATUS_CONFIG.pending;

  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/5 bg-card p-4 shadow-md shadow-black/20 transition-colors hover:border-white/10">
      <Icon size={20} className={`shrink-0 ${className}`} />

      <h3 className="text-base font-medium text-white/80">
        {goal}
      </h3>

    </div>
  );
}

export default GoalCard;
