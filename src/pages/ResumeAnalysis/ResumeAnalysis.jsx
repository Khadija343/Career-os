import { useState } from "react";
import { FileText, Tags } from "lucide-react";

import ScoreCard from "../../components/resume/ScoreCard";
import AnalysisCard from "../../components/resume/AnalysisCard";
import KeywordTag from "../../components/resume/KeywordTag";
import SuggestionCard from "../../components/resume/SuggestionCard";
import UploadResumeCard from "../../components/resume/UploadResumeCard";

function ResumeAnalysis() {
  const [analysis, setAnalysis] = useState(null);

  // Upload success handler (backend response yahan aayega)
  const handleUploadSuccess = (response) => {
    setAnalysis(response);
  };

  // EMPTY STATE
  if (!analysis) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 py-8 text-white/60 lg:px-8 lg:py-12">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 text-primary">
          <FileText size={28} />
        </div>

        <h2 className="mb-2 text-2xl font-bold text-white">
          Resume Analysis
        </h2>

        <p className="mb-6 text-center">
          Upload your resume to start analysis
        </p>

        <UploadResumeCard onUploadSuccess={handleUploadSuccess} />
      </div>
    );
  }

  // MAIN UI
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl space-y-8 px-6 py-8 lg:px-8 lg:py-12">
        <h1 className="flex items-center gap-3 text-3xl font-bold text-white sm:text-4xl">
          <FileText size={30} className="text-primary" />
          Resume Analysis
        </h1>

        {/* SCORE CARDS */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <ScoreCard
            title="Resume Score"
            score={`${analysis?.resumeScore || 0}%`}
          />

          <ScoreCard
            title="ATS Score"
            score={`${analysis?.atsScore || 0}%`}
          />
        </div>

        {/* STRENGTHS / WEAKNESSES */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <AnalysisCard
            title="Strengths"
            type="success"
            items={analysis?.strengths || []}
          />

          <AnalysisCard
            title="Weaknesses"
            type="danger"
            items={analysis?.weaknesses || []}
          />
        </div>

        {/* KEYWORDS */}
        <div className="rounded-2xl border border-white/5 bg-card p-6 shadow-lg shadow-black/20">
          <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-white">
            <Tags size={20} className="text-primary" />
            Matched Keywords
          </h2>

          <div className="flex flex-wrap gap-3">
            {(analysis?.keywords || []).map((item, index) => (
              <KeywordTag
                key={index}
                keyword={item.name}
                matched={item.matched}
              />
            ))}
          </div>
        </div>

        {/* SUGGESTIONS */}
        {(analysis?.suggestions || []).length > 0 && (
          <div className="space-y-4">
            {analysis.suggestions.map((s, index) => (
              <SuggestionCard key={index} suggestion={s} />
            ))}
          </div>
        )}

        {/* UPLOAD AGAIN */}
        <UploadResumeCard onUploadSuccess={handleUploadSuccess} />
      </div>
    </div>
  );
}

export default ResumeAnalysis;
