function RoadmapCard({ title, children }) {
  return (
    <div className="bg-card border border-white/5 rounded-2xl shadow-lg shadow-black/20 p-6">
      <h2 className="text-2xl font-bold mb-4 text-white">
        {title}
      </h2>

      {children}
    </div>
  );
}

export default RoadmapCard;
