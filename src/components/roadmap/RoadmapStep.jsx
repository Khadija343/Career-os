function RoadmapStep({ title, status }) {
  const bgColor =
    status === "completed"
      ? "bg-success"
      : status === "current"
      ? "bg-yellow-500"
      : "bg-white/15";

  return (
    <div className="flex items-center gap-4 mb-4">
      <div className={`w-5 h-5 rounded-full ${bgColor}`}></div>

      <h2 className="text-lg font-medium text-white/80">
        {title}
      </h2>
    </div>
  );
}

export default RoadmapStep;
