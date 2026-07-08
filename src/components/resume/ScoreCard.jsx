import { TrendingUp } from "lucide-react";

function ScoreCard({ title, score }) {
  return (
    <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-3xl p-6 shadow-xl shadow-black/20 hover:-translate-y-0.5 transition duration-300">

      <div className="flex justify-between items-center">

        <div>

          <h3 className="text-lg text-white/80">
            {title}
          </h3>

          <h2 className="text-5xl font-bold mt-3">
            {score}
          </h2>

          <p className="mt-3 text-white/80">
            Excellent Performance
          </p>

        </div>

        <TrendingUp size={50} />

      </div>

      <div className="mt-6 text-sm bg-white/20 inline-block px-3 py-2 rounded-full">
        ↑ +5% this week
      </div>

    </div>
  );
}

export default ScoreCard;
