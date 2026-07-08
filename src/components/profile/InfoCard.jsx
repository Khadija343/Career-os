function InfoCard({ label, value }) {
  return (
    <div className="h-full rounded-xl border border-white/5 bg-card p-4 shadow-lg shadow-black/20 transition-colors hover:border-white/10">
      <h3 className="text-sm text-white/50">{label}</h3>

      <p className="mt-1 text-base font-semibold text-white">
        {value}
      </p>
    </div>
  );
}

export default InfoCard;
