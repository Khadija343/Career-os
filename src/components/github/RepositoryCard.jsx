import { Star, GitFork } from "lucide-react";

function RepositoryCard({ name, stars, forks, tech }) {
  return (
    <div className="bg-card border border-white/5 rounded-2xl shadow-lg shadow-black/20 p-6 hover:border-white/10 transition">
      <h2 className="text-xl font-bold text-white">{name}</h2>

      <p className="text-white/50 mt-2">{tech}</p>

      <div className="flex gap-6 mt-4 text-white/70">
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
