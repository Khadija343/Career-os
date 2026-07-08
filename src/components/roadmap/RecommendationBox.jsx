function RecommendationBox({ recommendation }) {
  return (
    <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-5 rounded-xl mb-4">
      <p className="font-medium text-white/80">
        💡 {recommendation}
      </p>
    </div>
  );
}

export default RecommendationBox;
