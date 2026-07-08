function StatCard({ title, value, icon, description }) {
  return (
    <div className="bg-card border border-white/5 rounded-2xl shadow-lg shadow-black/20 p-6 hover:-translate-y-0.5 hover:border-white/10 transition duration-300">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-white/50 text-sm">{title}</h3>

          <h2 className="text-3xl font-bold mt-2 text-white">{value}</h2>

          <p className="text-white/40 mt-2">{description}</p>
        </div>

        <div className="text-primary">{icon}</div>
      </div>
    </div>
  );
}

export default StatCard;
