import { useState } from "react";

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

  // 🔴 EMPTY STATE
  if (!analysis) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8 text-gray-600">
        <h2 className="text-2xl font-bold mb-4">
          📄 Resume Analysis
        </h2>

        <p className="mb-6">
          Upload your resume to start analysis
        </p>

        <UploadResumeCard onUploadSuccess={handleUploadSuccess} />
      </div>
    );
  }

  // 🔵 MAIN UI
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8">
        📄 Resume Analysis
      </h1>

      {/* SCORE CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
      <div className="mt-8">
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
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">
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
      <div className="mt-8">
        {(analysis?.suggestions || []).map((s, index) => (
          <SuggestionCard key={index} suggestion={s} />
        ))}
      </div>

      {/* UPLOAD AGAIN */}
      <div className="mt-8">
        <UploadResumeCard onUploadSuccess={handleUploadSuccess} />
      </div>
    </div>
  );
}

export default ResumeAnalysis;