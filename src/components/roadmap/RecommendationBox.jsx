function RecommendationBox({ recommendation }) {
  return (
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-xl mb-4">
      <p className="font-medium">
        💡 {recommendation}
      </p>
    </div>
  );
}

export default RecommendationBox;