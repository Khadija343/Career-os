import CurrentGoal from "../../components/roadmap/CurrentGoal";
import RoadmapStep from "../../components/roadmap/RoadmapStep";
import MilestoneCard from "../../components/roadmap/MilestoneCard";
import RecommendationBox from "../../components/roadmap/RecommendationBox";

function Roadmap() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold mb-8">
        🗺️ AI Career Roadmap
      </h1>

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

    </div>
  );
}

export default Roadmap;