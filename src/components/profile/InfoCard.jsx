function InfoCard({ label, value }) {
  return (
    <div className="bg-card shadow-lg shadow-black/20 rounded-xl p-4 mb-4 border border-white/5">
      <h3 className="text-white/50 text-sm">{label}</h3>

      <p className="text-lg font-semibold text-white">
        {value}
      </p>
    </div>
  );
}

export default InfoCard;
