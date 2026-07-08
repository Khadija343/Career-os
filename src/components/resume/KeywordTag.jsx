import { Check, X } from "lucide-react";

function KeywordTag({ keyword, matched }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm font-semibold transition-transform duration-200 hover:scale-105 ${
        matched
          ? "border-success/30 bg-success/15 text-success"
          : "border-white/10 bg-white/5 text-white/40"
      }`}
    >
      {matched ? <Check size={14} /> : <X size={14} />}
      {keyword}
    </span>
  );
}

export default KeywordTag;
