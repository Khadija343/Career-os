import AnimatedNumber from "../ui/AnimatedNumber";

function ProgressRing({ percentage, label }) {
  return (
    <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-white/5 bg-card p-6 shadow-lg shadow-black/20 transition-colors duration-300 hover:border-white/10">

      <div className="flex h-28 w-28 items-center justify-center rounded-full border-8 border-primary/20 border-t-primary">

        <span className="text-3xl font-bold text-primary">
          <AnimatedNumber value={percentage} />%
        </span>

      </div>

      <h3 className="mt-5 text-lg font-semibold text-white">
        {label}
      </h3>

    </div>
  );
}

export default ProgressRing;
