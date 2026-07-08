import { CheckCircle, XCircle } from "lucide-react";

function AnalysisCard({ title, items, type }) {
  const isSuccess = type === "success";

  return (
    <div className="bg-card border border-white/5 rounded-3xl shadow-lg shadow-black/20 p-6 mt-6 hover:border-white/10 transition duration-300">
      <h2 className="text-2xl font-bold mb-5 text-white">
        {title}
      </h2>

      <div className="space-y-3">
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex items-center gap-3 p-3 rounded-xl border ${
              isSuccess
                ? "bg-success/10 border-success/30"
                : "bg-danger/10 border-danger/30"
            }`}
          >
            {isSuccess ? (
              <CheckCircle className="text-success" size={22} />
            ) : (
              <XCircle className="text-danger" size={22} />
            )}

            <span className="font-medium text-white/80">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnalysisCard;
