import { TrendingUp, Target, Activity, Award } from "lucide-react";

import ProgressCard from "../../components/progress/ProgressCard";
import GoalCard from "../../components/progress/GoalCard";
import ActivityCard from "../../components/progress/ActivityCard";
import AchievementCard from "../../components/progress/AchievementCard";

function ProgressTracker() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl space-y-8 px-6 py-8 lg:px-8 lg:py-12">

        <h1 className="flex items-center gap-3 text-3xl font-bold text-white sm:text-4xl">
          <TrendingUp size={30} className="text-primary" />
          Progress Tracker
        </h1>

        {/* Overall Progress */}
        <ProgressCard title="Overall Progress" progress={82} />

        {/* Weekly Goals */}
        <div>
          <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-white">
            <Target size={20} className="text-primary" />
            Weekly Goals
          </h2>

          <div className="space-y-3">
            <GoalCard goal="Finish Dashboard" status="completed" />
            <GoalCard goal="Upload Resume" status="completed" />
            <GoalCard goal="Complete GitHub Analysis" status="current" />
            <GoalCard goal="Learn Node.js" status="pending" />
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-white">
            <Activity size={20} className="text-primary" />
            Recent Activity
          </h2>

          <div className="space-y-3">
            <ActivityCard activity="Resume Uploaded" date="Today" />
            <ActivityCard activity="GitHub Connected" date="Yesterday" />
            <ActivityCard activity="Career Score Improved" date="2 Days Ago" />
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-white">
            <Award size={20} className="text-primary" />
            Achievements
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <AchievementCard title="First Resume Uploaded" />
            <AchievementCard title="7 Day Streak" />
            <AchievementCard title="Career OS Started" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default ProgressTracker;
