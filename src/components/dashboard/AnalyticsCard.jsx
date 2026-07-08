function AnalyticsCard({ title, subtitle, buttonText }) {
  return (
    <div className="bg-card border border-white/5 rounded-2xl shadow-lg shadow-black/20 p-6 hover:border-white/10 transition">
      <h2 className="text-xl font-bold text-white">{title}</h2>

      <p className="text-white/50 mt-2">
        {subtitle}
      </p>

      <button className="mt-5 bg-primary text-white px-4 py-2 rounded-xl hover:bg-primary/90 transition">
        {buttonText}
      </button>
    </div>
  );
}

export default AnalyticsCard;
