import { Sparkles } from "lucide-react";

function WelcomeBanner() {
  return (
    <div className="rounded-2xl bg-gradient-to-r from-primary to-secondary p-6 text-white shadow-xl shadow-black/20 sm:p-8">
      <div className="flex items-center gap-2 text-white/80">
        <Sparkles size={18} />
        <span className="text-sm font-medium">Welcome back</span>
      </div>

      <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
        Welcome Back, Muntaha!
      </h1>

      <p className="mt-2 text-sm text-white/80 sm:text-base">
        Track your career progress and achieve your goals with AI.
      </p>
    </div>
  );
}

export default WelcomeBanner;
