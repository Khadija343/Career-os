import { useState } from "react";
import aiService from "../../services/aiService";

import CurrentGoal from "../../components/roadmap/CurrentGoal";
import RoadmapStep from "../../components/roadmap/RoadmapStep";
import MilestoneCard from "../../components/roadmap/MilestoneCard";
import RecommendationBox from "../../components/roadmap/RecommendationBox";

function Roadmap() {
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!role.trim()) {
      alert("Please enter a career role.");
      return;
    }

    setLoading(true);

    try {
      const response = await aiService.generateRoadmap(role);

      console.log("Roadmap Generated:", response);

      alert("Roadmap generated successfully!");
    } catch (error) {
      console.error("Roadmap Error:", error);

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
        🗺️ AI Career Roadmap
      </h1>

      {/* Role Input */}

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
          className={`px-6 py-3 rounded-lg text-white transition ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-600 hover:bg-green-700"
          }`}
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
            goal="React.js"
            progress={70}
          />

          {/* Learning Path */}

          <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">
            <h2 className="text-2xl font-bold mb-6">
              Learning Path
            </h2>

            <RoadmapStep
              title="HTML"
              status="completed"
            />

            <RoadmapStep
              title="CSS"
              status="completed"
            />

            <RoadmapStep
              title="JavaScript"
              status="completed"
            />

            <RoadmapStep
              title="React"
              status="current"
            />

            <RoadmapStep
              title="TypeScript"
              status="pending"
            />

            <RoadmapStep
              title="Node.js"
              status="pending"
            />

            <RoadmapStep
              title="Express.js"
              status="pending"
            />

            <RoadmapStep
              title="MongoDB"
              status="pending"
            />
          </div>

          {/* Milestones */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <MilestoneCard title="Build Portfolio" />

            <MilestoneCard title="Complete Career OS" />

            <MilestoneCard title="Get Internship" />
          </div>

          {/* AI Recommendations */}

          <div className="mt-8">
            <RecommendationBox
              recommendation="Learn TypeScript after React."
            />

            <RecommendationBox
              recommendation="Build REST APIs with Express."
            />

            <RecommendationBox
              recommendation="Deploy your projects on Vercel."
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Roadmap;