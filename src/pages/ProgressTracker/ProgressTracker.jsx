import ProgressCard from "../../components/progress/ProgressCard";
import GoalCard from "../../components/progress/GoalCard";
import ActivityCard from "../../components/progress/ActivityCard";
import AchievementCard from "../../components/progress/AchievementCard";

function ProgressTracker() {
  return (
    <div className="min-h-screen bg-background">
    <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-12">

      <h1 className="text-4xl font-bold mb-8 text-white">
        📈 Progress Tracker
      </h1>

      {/* Overall Progress */}

      <ProgressCard
        title="Overall Progress"
        progress={82}
      />

      {/* Weekly Goals */}

      <div className="mt-10">

        <h2 className="text-2xl font-bold mb-5 text-white">
          Weekly Goals
        </h2>

        <GoalCard
          goal="Finish Dashboard"
          status="completed"
        />

        <GoalCard
          goal="Upload Resume"
          status="completed"
        />

        <GoalCard
          goal="Complete GitHub Analysis"
          status="current"
        />

        <GoalCard
          goal="Learn Node.js"
          status="pending"
        />

      </div>

      {/* Recent Activity */}

      <div className="mt-10">

        <h2 className="text-2xl font-bold mb-5 text-white">
          Recent Activity
        </h2>

        <ActivityCard
          activity="📄 Resume Uploaded"
          date="Today"
        />

        <ActivityCard
          activity="🐙 GitHub Connected"
          date="Yesterday"
        />

        <ActivityCard
          activity="🏆 Career Score Improved"
          date="2 Days Ago"
        />

      </div>

      {/* Achievements */}

      <div className="mt-10">

        <h2 className="text-2xl font-bold mb-5 text-white">
          Achievements
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <AchievementCard
            title="First Resume Uploaded"
          />

          <AchievementCard
            title="7 Day Streak"
          />

          <AchievementCard
            title="Career OS Started"
          />

        </div>

      </div>

    </div>
    </div>
  );
}

export default ProgressTracker;