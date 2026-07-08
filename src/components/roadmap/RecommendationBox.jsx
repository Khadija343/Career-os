import { Lightbulb } from "lucide-react";

function RecommendationBox({ recommendation }) {
  return (
    <div className="flex items-start gap-3 rounded-xl border-l-4 border-yellow-500 bg-yellow-500/10 p-5">
      <Lightbulb size={18} className="mt-0.5 shrink-0 text-yellow-500" />
      <p className="font-medium text-white/80">
        {recommendation}
      </p>
    </div>
  );
}

export default RecommendationBox;
