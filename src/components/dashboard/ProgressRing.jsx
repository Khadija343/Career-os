function ProgressRing({ percentage, label }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:shadow-xl transition duration-300">

      <div className="w-28 h-28 rounded-full border-8 border-blue-600 flex items-center justify-center">

        <span className="text-3xl font-bold text-blue-600">
          {percentage}%
        </span>

      </div>

      <h3 className="mt-5 text-xl font-semibold">
        {label}
      </h3>

    </div>
  );
}

export default ProgressRing;