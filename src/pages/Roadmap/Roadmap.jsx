import { useState } from "react";
import { Map } from "lucide-react";

import aiService from "../../services/aiService";

import CurrentGoal from "../../components/roadmap/CurrentGoal";
import RoadmapStep from "../../components/roadmap/RoadmapStep";
import RoadmapCard from "../../components/roadmap/RoadmapCard";
import MilestoneCard from "../../components/roadmap/MilestoneCard";
import RecommendationBox from "../../components/roadmap/RecommendationBox";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import Spinner from "../../components/ui/Spinner";

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

  const PageHeading = (
    <h1 className="flex items-center gap-3 text-3xl font-bold text-white sm:text-4xl">
      <Map size={30} className="text-primary" />
      AI Career Roadmap
    </h1>
  );

  const RoleInputRow = (
    <div className="flex flex-col gap-3 sm:flex-row">
      <div className="flex-1">
        <Input
          type="text"
          placeholder="Enter Career Role (e.g. Frontend Developer)"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
      </div>

      <Button onClick={handleGenerate} disabled={loading}>
        {loading ? "Generating..." : "Generate Roadmap"}
      </Button>
    </div>
  );

  // Empty State
  if (!roadmapData && !loading && !error) {
    return (
      <div className="min-h-screen bg-background">
        <div className="mx-auto max-w-7xl space-y-8 px-6 py-8 lg:px-8 lg:py-12">
          {PageHeading}

          {RoleInputRow}

          <div className="py-16 text-center">
            <h2 className="text-lg font-semibold text-white/50">
              Enter a career role to generate your AI roadmap
            </h2>
          </div>
        </div>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <div className="mx-auto max-w-7xl space-y-8 px-6 py-8 lg:px-8 lg:py-12">
          {PageHeading}

          <div className="rounded-2xl border border-danger/20 bg-danger/5 py-10 text-center text-danger">
            <p>{error}</p>
            <Button variant="danger" onClick={handleGenerate} className="mt-4">
              Retry
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl space-y-8 px-6 py-8 lg:px-8 lg:py-12">
        {PageHeading}

        {RoleInputRow}

        {/* Loading */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Spinner size={40} />
          </div>
        ) : (
          <div className="space-y-8">
            {/* Current Goal */}
            <CurrentGoal
              goal={roadmapData?.goal}
              progress={roadmapData?.progress}
            />

            {/* Learning Path */}
            <RoadmapCard title="Learning Path">
              {roadmapData?.roadmap?.map((item, index, arr) => (
                <RoadmapStep
                  key={index}
                  title={item}
                  isLast={index === arr.length - 1}
                  status={
                    index < 2
                      ? "completed"
                      : index === 2
                      ? "current"
                      : "pending"
                  }
                />
              ))}
            </RoadmapCard>

            {/* Milestones */}
            {roadmapData?.milestones?.length > 0 && (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {roadmapData.milestones.map((item, index) => (
                  <MilestoneCard key={index} title={item} />
                ))}
              </div>
            )}

            {/* Recommendations */}
            {roadmapData?.recommendations?.length > 0 && (
              <div className="space-y-3">
                {roadmapData.recommendations.map((item, index) => (
                  <RecommendationBox key={index} recommendation={item} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Roadmap;
