import { BarChart3 } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", progress: 30 },
  { day: "Tue", progress: 45 },
  { day: "Wed", progress: 60 },
  { day: "Thu", progress: 55 },
  { day: "Fri", progress: 75 },
  { day: "Sat", progress: 82 },
  { day: "Sun", progress: 92 },
];

function WeeklyActivity() {
  return (
    <div className="rounded-2xl border border-white/5 bg-card p-6 shadow-lg shadow-black/20">
      <h2 className="mb-6 flex items-center gap-2 text-xl font-bold text-white">
        <BarChart3 size={20} className="text-primary" />
        Weekly Activity
      </h2>

      <div className="w-full h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="day" stroke="#ffffff40" tick={{ fill: "#94a3b8" }} />

            <YAxis stroke="#ffffff40" tick={{ fill: "#94a3b8" }} />

            <Tooltip
              contentStyle={{
                backgroundColor: "#1e293b",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "0.75rem",
                color: "#fff",
              }}
            />

            <Line
              type="monotone"
              dataKey="progress"
              stroke="#6366f1"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default WeeklyActivity;
