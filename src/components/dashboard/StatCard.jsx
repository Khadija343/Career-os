import AnimatedNumber from "../ui/AnimatedNumber";

function StatCard({ title, value, icon, description }) {
  const isPercentage = typeof value === "number";

  return (
    <div className="h-full rounded-2xl border border-white/5 bg-card p-6 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/10">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm text-white/50">{title}</h3>

          <h2 className="mt-2 text-3xl font-bold text-white">
            {isPercentage ? (
              <>
                <AnimatedNumber value={value} />%
              </>
            ) : (
              value
            )}
          </h2>

          <p className="mt-2 text-sm text-white/40">{description}</p>
        </div>

        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
          {icon}
        </div>
      </div>
    </div>
  );
}

export default StatCard;
