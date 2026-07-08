import AnimatedNumber from "../ui/AnimatedNumber";

function ProgressCard({ title, progress }) {
  return (
    <div className="rounded-2xl border border-white/5 bg-card p-6 shadow-lg shadow-black/20">

      <h2 className="text-lg font-semibold text-white sm:text-xl">
        {title}
      </h2>

      <h1 className="mt-4 text-4xl font-bold text-primary">
        <AnimatedNumber value={progress} />%
      </h1>

      <div className="mt-5 h-3 w-full rounded-full bg-white/10">
        <div
          className="h-3 rounded-full bg-primary transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

    </div>
  );
}

export default ProgressCard;
