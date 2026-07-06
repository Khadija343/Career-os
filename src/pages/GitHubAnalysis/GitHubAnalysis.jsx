import { useState } from "react";

import GitHubStatCard from "../../components/github/GitHubStatCard";
import ScoreCard from "../../components/resume/ScoreCard";
import AnalysisCard from "../../components/resume/AnalysisCard";
import KeywordTag from "../../components/resume/KeywordTag";
import UploadGitHubCard from "../../components/github/UploadGitHubCard";

function GitHubAnalysis() {
  const [analysis, setAnalysis] = useState(null);

  // 🔹 handle API response
  const handleSuccess = (response) => {
    setAnalysis(response);
  };

 if (!analysis) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8 text-gray-600">
      <h2 className="text-2xl font-bold mb-4">
        💻 GitHub Analysis
      </h2>

      <p className="mb-6">
        Enter your GitHub username to start analysis
      </p>

      {/* ✅ FIXED HERE */}
      <UploadGitHubCard onSuccess={handleSuccess} />
    </div>
  );
}
  // 🔵 MAIN UI
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8">
        💻 GitHub Analysis
      </h1>

      {/* SCORE CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ScoreCard
          title="GitHub Score"
          score={`${analysis?.githubScore || 0}%`}
        />

        <ScoreCard
          title="Repositories"
          score={analysis?.repositories || 0}
        />
      </div>

      {/* STATS */}
      <div className="mt-8">
        <AnalysisCard
          title="Strengths"
          type="success"
          items={analysis?.strengths || []}
        />

        <AnalysisCard
          title="Improvements"
          type="danger"
          items={analysis?.improvements || []}
        />
      </div>

      {/* LANGUAGES */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">
          Top Languages
        </h2>

        <div className="flex flex-wrap gap-3">
          {(analysis?.languages || []).map((lang, index) => (
            <KeywordTag
              key={index}
              keyword={lang.name}
              matched={true}
            />
          ))}
        </div>
      </div>

      {/* RECENT PROJECTS */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">
          Recent Projects
        </h2>

        <div className="space-y-3">
          {(analysis?.projects || []).map((p, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-sm"
            >
              <h3 className="font-semibold">{p.name}</h3>
              <p className="text-sm text-gray-500">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* RE-ANALYZE */}
      <div className="mt-8">
        <UploadGitHubCard onSuccess={handleSuccess} />
      </div>
    </div>
  );
}

export default GitHubAnalysis;