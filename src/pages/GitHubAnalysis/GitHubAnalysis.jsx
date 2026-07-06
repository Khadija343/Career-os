import { useState } from "react";

import GitHubStatCard from "../../components/github/GitHubStatCard";
import LanguageCard from "../../components/github/LanguageCard";
import RepositoryCard from "../../components/github/RepositoryCard";
import RecommendationCard from "../../components/github/RecommendationCard";
import ContributionChart from "../../components/github/ContributionChart";

import aiService from "../../services/aiService";

import {
  Code2,
  FolderGit2,
  Star,
  GitCommitHorizontal,
} from "lucide-react";

function GitHubAnalysis() {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!username.trim()) {
      alert("Please enter a GitHub username.");
      return;
    }

    setLoading(true);

    try {
      const response = await aiService.analyzeGithub(username);

      console.log("GitHub Analysis:", response);

      alert("Analysis completed successfully!");
    } catch (error) {
      console.error("GitHub Analysis Error:", error);

      alert(
        error.response?.data?.message ||
          "Backend is not connected yet."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8">
        🐙 GitHub Analysis
      </h1>

      {/* GitHub Username */}

      <div className="flex gap-4 mb-8">
        <input
          type="text"
          placeholder="Enter GitHub Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="flex-1 border border-gray-300 rounded-lg px-4 py-3"
        />

        <button
          onClick={handleAnalyze}
          disabled={loading}
          className={`px-6 py-3 rounded-lg text-white transition ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Analyzing..." : "Analyze"}
        </button>
      </div>

      {/* Loading Spinner */}

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          {/* Stats */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <GitHubStatCard
              title="GitHub Score"
              value="94%"
              icon={<Code2 size={40} />}
              color="bg-gray-800"
            />

            <GitHubStatCard
              title="Repositories"
              value="25"
              icon={<FolderGit2 size={40} />}
              color="bg-blue-600"
            />

            <GitHubStatCard
              title="Stars"
              value="132"
              icon={<Star size={40} />}
              color="bg-yellow-500"
            />

            <GitHubStatCard
              title="Contributions"
              value="1260"
              icon={<GitCommitHorizontal size={40} />}
              color="bg-green-600"
            />
          </div>

          {/* Top Languages */}

          <div className="mt-10">
            <h2 className="text-3xl font-bold mb-6">
              Top Languages
            </h2>

            <LanguageCard
              language="React"
              percentage={90}
              color="bg-blue-500"
            />

            <LanguageCard
              language="JavaScript"
              percentage={85}
              color="bg-yellow-500"
            />

            <LanguageCard
              language="Python"
              percentage={70}
              color="bg-green-500"
            />
          </div>

          {/* Repositories */}

          <div className="mt-10">
            <h2 className="text-3xl font-bold mb-6">
              Repositories
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <RepositoryCard
                name="Career OS"
                stars={24}
                forks={6}
                tech="React + Node.js"
              />

              <RepositoryCard
                name="Portfolio"
                stars={12}
                forks={2}
                tech="Next.js"
              />
            </div>
          </div>

          {/* Contribution Chart */}

          <div className="mt-10">
            <ContributionChart />
          </div>

          {/* AI Recommendations */}

          <div className="mt-10">
            <h2 className="text-3xl font-bold mb-6">
              AI Recommendations
            </h2>

            <RecommendationCard
              suggestion="Increase commit frequency."
            />

            <RecommendationCard
              suggestion="Pin your best repositories."
            />

            <RecommendationCard
              suggestion="Contribute to Open Source."
            />
          </div>
        </>
      )}
    </div>
  );
}

export default GitHubAnalysis;