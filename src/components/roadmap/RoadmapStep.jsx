import { Check } from "lucide-react";

const STATUS_CONFIG = {
  completed: {
    dot: "border-success bg-success text-white",
    line: "bg-success/40",
    label: "text-white/80",
  },
  current: {
    dot: "border-primary bg-primary text-white ring-4 ring-primary/20",
    line: "bg-white/10",
    label: "text-white",
  },
  pending: {
    dot: "border-white/15 bg-card text-white/30",
    line: "bg-white/10",
    label: "text-white/40",
  },
};

function RoadmapStep({ title, status, isLast = false }) {
  const config = STATUS_CONFIG[status] || STATUS_CONFIG.pending;

  return (
    <div className="relative flex gap-4 pb-8 last:pb-0">
      {!isLast && (
        <span
          className={`absolute left-[11px] top-6 h-[calc(100%-0.75rem)] w-px ${config.line}`}
        />
      )}

      <span
        className={`relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-colors duration-300 ${config.dot}`}
      >
        {status === "completed" && <Check size={14} strokeWidth={3} />}
      </span>

      <h3 className={`pt-0.5 text-sm font-medium sm:text-base ${config.label}`}>
        {title}
      </h3>
    </div>
  );
}

export default RoadmapStep;
