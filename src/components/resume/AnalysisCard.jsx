import { CheckCircle, XCircle } from "lucide-react";

function AnalysisCard({ title, items, type }) {
  const isSuccess = type === "success";

  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 mt-6 hover:shadow-xl transition duration-300">
      <h2 className="text-2xl font-bold mb-5">
        {title}
      </h2>

      <div className="space-y-3">
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex items-center gap-3 p-3 rounded-xl ${
              isSuccess
                ? "bg-green-50 border border-green-200"
                : "bg-red-50 border border-red-200"
            }`}
          >
            {isSuccess ? (
              <CheckCircle className="text-green-600" size={22} />
            ) : (
              <XCircle className="text-red-600" size={22} />
            )}

            <span className="font-medium text-gray-700">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnalysisCard;