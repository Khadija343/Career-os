import { Activity } from "lucide-react";

function ActivityCard({ activity, date }) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-white/5 bg-card p-4 shadow-md shadow-black/20">
      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
        <Activity size={16} />
      </div>

      <div>
        <h3 className="font-semibold text-white">
          {activity}
        </h3>

        <p className="mt-0.5 text-sm text-white/50">
          {date}
        </p>
      </div>

    </div>
  );
}

export default ActivityCard;
