function ProgressRing({ percentage, label }) {
  return (
    <div className="bg-card border border-white/5 rounded-2xl shadow-lg shadow-black/20 p-6 flex flex-col items-center hover:border-white/10 transition duration-300">

      <div className="w-28 h-28 rounded-full border-8 border-primary flex items-center justify-center">

        <span className="text-3xl font-bold text-primary">
          {percentage}%
        </span>

      </div>

      <h3 className="mt-5 text-xl font-semibold text-white">
        {label}
      </h3>

    </div>
  );
}

export default ProgressRing;
