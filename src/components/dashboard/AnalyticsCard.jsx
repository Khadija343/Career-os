function AnalyticsCard({ title, subtitle, buttonText }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
      <h2 className="text-xl font-bold">{title}</h2>

      <p className="text-gray-500 mt-2">
        {subtitle}
      </p>

      <button className="mt-5 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
        {buttonText}
      </button>
    </div>
  );
}

export default AnalyticsCard;