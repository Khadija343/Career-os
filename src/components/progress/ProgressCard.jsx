function ProgressCard({ title, progress }) {
  return (
    <div className="bg-card border border-white/5 rounded-2xl shadow-lg shadow-black/20 p-6">

      <h2 className="text-xl font-semibold text-white">
        {title}
      </h2>

      <h1 className="text-4xl font-bold text-primary mt-4">
        {progress}%
      </h1>

      <div className="w-full bg-white/10 rounded-full h-3 mt-5">
        <div
          className="bg-primary h-3 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

    </div>
  );
}

export default ProgressCard;
