import { Lightbulb } from "lucide-react";

function RecommendationCard({ suggestion }) {
  return (
    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-5 shadow-md mb-4">
      <div className="flex gap-3 items-center">
        <Lightbulb className="text-yellow-500" />

        <p className="font-medium text-white/80">
          {suggestion}
        </p>
      </div>
    </div>
  );
}

export default RecommendationCard;
