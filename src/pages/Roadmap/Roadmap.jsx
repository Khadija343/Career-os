import { useState } from "react";
import aiService from "../../services/aiService";

import CurrentGoal from "../../components/roadmap/CurrentGoal";
import RoadmapStep from "../../components/roadmap/RoadmapStep";
import MilestoneCard from "../../components/roadmap/MilestoneCard";
import RecommendationBox from "../../components/roadmap/RecommendationBox";

function Roadmap() {
  const [role, setRole] = useState("");
  const [roadmapData, setRoadmapData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGenerate = async () => {
    if (!role.trim()) {
      alert("Please enter a career role.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await aiService.generateRoadmap(role);
      setRoadmapData(response);
      console.log("Roadmap Generated:", response);
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Backend is not connected yet."
      );
    } finally {
      setLoading(false);
    }
  };

  // Empty State
  if (!roadmapData && !loading && !error) {
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-4xl font-bold mb-8">
          🗺️ AI Career Roadmap
        </h1>

        <div className="flex gap-4 mb-8">
          <input
            type="text"
            placeholder="Enter Career Role (e.g. Frontend Developer)"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="flex-1 border border-gray-300 rounded-lg px-4 py-3"
          />

          <button
            onClick={handleGenerate}
            disabled={loading}
            className="px-6 py-3 rounded-lg text-white bg-green-600 hover:bg-green-700"
          >
            Generate Roadmap
          </button>
        </div>

        <div className="text-center py-20">
          <h2 className="text-xl font-semibold">
            Enter a career role to generate your AI roadmap
          </h2>
        </div>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-4xl font-bold mb-8">
          🗺️ AI Career Roadmap
        </h1>

        <div className="text-center text-red-600 py-10">
          <p>{error}</p>
          <button
            onClick={handleGenerate}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8">
        🗺️ AI Career Roadmap
      </h1>

      {/* Input */}
      <div className="flex gap-4 mb-8">
        <input
          type="text"
          placeholder="Enter Career Role (e.g. Frontend Developer)"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="flex-1 border border-gray-300 rounded-lg px-4 py-3"
        />

        <button
          onClick={handleGenerate}
          disabled={loading}
          className="px-6 py-3 rounded-lg text-white bg-green-600 hover:bg-green-700"
        >
          {loading ? "Generating..." : "Generate Roadmap"}
        </button>
      </div>

      {/* Loading */}
      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="w-12 h-12 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          {/* Current Goal */}
          <CurrentGoal
            goal={roadmapData?.goal}
            progress={roadmapData?.progress}
          />

          {/* Learning Path */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">
            <h2 className="text-2xl font-bold mb-6">
              Learning Path
            </h2>

            {roadmapData?.roadmap?.map((item, index) => (
              <RoadmapStep
                key={index}
                title={item}
                status={
                  index < 2
                    ? "completed"
                    : index === 2
                    ? "current"
                    : "pending"
                }
              />
            ))}
          </div>

          {/* Milestones */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {roadmapData?.milestones?.map((item, index) => (
              <MilestoneCard key={index} title={item} />
            ))}
          </div>

          {/* Recommendations */}
          <div className="mt-8">
            {roadmapData?.recommendations?.map(
              (item, index) => (
                <RecommendationBox
                  key={index}
                  recommendation={item}
                />
              )
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Roadmap;