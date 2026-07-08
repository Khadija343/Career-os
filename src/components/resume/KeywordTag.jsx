function KeywordTag({ keyword, matched }) {
  return (
    <span
      className={`px-4 py-2 rounded-full text-sm font-semibold transition duration-300 hover:scale-105 border ${
        matched
          ? "bg-success/15 text-success border-success/30"
          : "bg-white/5 text-white/40 border-white/10"
      }`}
    >
      {matched ? "✅ " : "❌ "}
      {keyword}
    </span>
  );
}

export default KeywordTag;
