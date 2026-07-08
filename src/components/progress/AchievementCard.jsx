import { Trophy } from "lucide-react";

function AchievementCard({ title }) {
  return (
    <div className="flex h-full items-center gap-3 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 p-5 text-white shadow-lg shadow-black/20 transition-transform duration-300 hover:-translate-y-0.5">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/20">
        <Trophy size={18} />
      </div>

      <h2 className="text-base font-bold">
        {title}
      </h2>

    </div>
  );
}

export default AchievementCard;
