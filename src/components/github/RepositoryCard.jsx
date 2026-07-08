import { Star, GitFork } from "lucide-react";

function RepositoryCard({ name, stars, forks, tech }) {
  return (
    <div className="h-full rounded-2xl border border-white/5 bg-card p-6 shadow-lg shadow-black/20 transition-colors hover:border-white/10">
      <h2 className="text-xl font-bold text-white">{name}</h2>

      <p className="mt-2 text-sm text-white/50">{tech}</p>

      <div className="mt-4 flex gap-6 text-white/70">
        <div className="flex items-center gap-2">
          <Star size={18} />
          {stars}
        </div>

        <div className="flex items-center gap-2">
          <GitFork size={18} />
          {forks}
        </div>
      </div>
    </div>
  );
}

export default RepositoryCard;
