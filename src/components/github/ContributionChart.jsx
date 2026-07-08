function ContributionChart() {
  const weeks = [5, 8, 3, 10, 7, 12, 9];

  return (
    <div className="bg-card border border-white/5 rounded-2xl shadow-lg shadow-black/20 p-6">
      <h2 className="text-2xl font-bold mb-6 text-white">
        Weekly Contributions
      </h2>

      <div className="flex items-end justify-between h-48">
        {weeks.map((value, index) => (
          <div
            key={index}
            className="flex flex-col items-center"
          >
            <div
              className="bg-success rounded-t-lg w-10 transition-all duration-300 hover:bg-success/80"
              style={{ height: `${value * 12}px` }}
            ></div>

            <span className="mt-2 text-sm text-white/50">
              W{index + 1}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContributionChart;
