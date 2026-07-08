function MilestoneCard({ title }) {
  return (
    <div className="bg-card border border-white/5 rounded-xl shadow-lg shadow-black/20 p-5 hover:border-white/10 transition">
      <h2 className="text-lg font-semibold text-white">
        🏆 {title}
      </h2>
    </div>
  );
}

export default MilestoneCard;
