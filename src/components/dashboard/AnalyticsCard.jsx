import Button from "../ui/Button";

function AnalyticsCard({ title, subtitle, buttonText }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-white/5 bg-card p-6 shadow-lg shadow-black/20 transition-colors hover:border-white/10">
      <h2 className="text-xl font-bold text-white">{title}</h2>

      <p className="mt-2 flex-1 text-sm text-white/50">
        {subtitle}
      </p>

      <Button text={buttonText} className="mt-5 self-start" />
    </div>
  );
}

export default AnalyticsCard;
