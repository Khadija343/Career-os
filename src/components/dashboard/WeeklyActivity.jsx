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
    <div className="bg-card border border-white/5 rounded-2xl shadow-lg shadow-black/20 p-6 mt-10">
      <h2 className="text-2xl font-bold mb-6 text-white">
        📊 Weekly Activity
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
