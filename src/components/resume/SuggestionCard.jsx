import { Lightbulb, ArrowRight } from "lucide-react";

function SuggestionCard({ suggestion }) {
  return (
    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-5 shadow-md hover:shadow-lg transition duration-300 mt-4">

      <div className="flex justify-between items-start">

        <div className="flex gap-3">

          <div className="bg-yellow-500 p-3 rounded-full">
            <Lightbulb className="text-white" size={24} />
          </div>

          <div>
            <h3 className="font-bold text-lg text-white">
              AI Suggestion
            </h3>

            <p className="text-white/70 mt-2">
              {suggestion}
            </p>

            <span className="inline-block mt-3 px-3 py-1 bg-danger/15 text-danger rounded-full text-sm">
              High Priority
            </span>
          </div>

        </div>

        <ArrowRight className="text-white/40" />
      </div>

    </div>
  );
}

export default SuggestionCard;
