import { useState } from "react";
import { GitBranch, Code2, FolderGit2 } from "lucide-react";

import ScoreCard from "../../components/resume/ScoreCard";
import AnalysisCard from "../../components/resume/AnalysisCard";
import KeywordTag from "../../components/resume/KeywordTag";
import RepositoryCard from "../../components/github/RepositoryCard";
import ContributionChart from "../../components/github/ContributionChart";
import UploadGitHubCard from "../../components/github/UploadGitHubCard";

function GitHubAnalysis() {
  const [analysis, setAnalysis] = useState(null);

  const handleSuccess = (response) => {
    setAnalysis(response);
  };

  // EMPTY STATE
  if (!analysis) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 py-8 text-white/60 lg:px-8 lg:py-12">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 text-primary">
          <GitBranch size={28} />
        </div>

        <h2 className="mb-2 text-2xl font-bold text-white">
          GitHub Analysis
        </h2>

        <p className="mb-6 text-center">
          Enter your GitHub username to start analysis
        </p>

        <UploadGitHubCard onSuccess={handleSuccess} />
      </div>
    );
  }

  const projects = analysis?.projects || [];

  // MAIN UI
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl space-y-8 px-6 py-8 lg:px-8 lg:py-12">
        <h1 className="flex items-center gap-3 text-3xl font-bold text-white sm:text-4xl">
          <GitBranch size={30} className="text-primary" />
          GitHub Analysis
        </h1>

        {/* SCORE CARDS */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <ScoreCard
            title="GitHub Score"
            score={`${analysis?.githubScore || 0}%`}
          />

          <ScoreCard
            title="Repositories"
            score={analysis?.repositories || 0}
            suffix=""
          />
        </div>

        {/* STRENGTHS / IMPROVEMENTS */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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

        {/* CONTRIBUTIONS CHART */}
        <ContributionChart />

        {/* LANGUAGES */}
        <div className="rounded-2xl border border-white/5 bg-card p-6 shadow-lg shadow-black/20">
          <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-white">
            <Code2 size={20} className="text-primary" />
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
        {projects.length > 0 && (
          <div>
            <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-white">
              <FolderGit2 size={20} className="text-primary" />
              Recent Projects
            </h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {projects.map((p, index) => (
                <RepositoryCard
                  key={index}
                  name={p.name}
                  tech={p.description}
                  stars={p.stars ?? 0}
                  forks={p.forks ?? 0}
                />
              ))}
            </div>
          </div>
        )}

        {/* RE-ANALYZE */}
        <UploadGitHubCard onSuccess={handleSuccess} />
      </div>
    </div>
  );
}

export default GitHubAnalysis;
