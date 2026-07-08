function CurrentGoal({ goal, progress }) {
  return (
    <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-2xl p-6 shadow-lg shadow-black/20">
      <h2 className="text-xl font-semibold">
        🎯 Current Goal
      </h2>

      <h1 className="text-3xl font-bold mt-3">
        {goal}
      </h1>

      <p className="mt-4">
        Progress: {progress}%
      </p>

      <div className="w-full bg-white/20 rounded-full h-3 mt-3">
        <div
          className="bg-white h-3 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}

export default CurrentGoal;
