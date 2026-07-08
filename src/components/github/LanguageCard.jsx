function LanguageCard({ language, percentage, color }) {
  return (
    <div className="bg-card border border-white/5 rounded-2xl shadow-lg shadow-black/20 p-5 mb-4">
      <div className="flex justify-between mb-2">
        <h3 className="font-semibold text-white">{language}</h3>
        <span className="text-white/60">{percentage}%</span>
      </div>

      <div className="w-full bg-white/10 rounded-full h-3">
        <div
          className={`${color} h-3 rounded-full`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}

export default LanguageCard;
