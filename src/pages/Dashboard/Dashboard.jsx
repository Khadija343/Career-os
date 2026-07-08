import {
  Award,
  FileText,
  GitBranch,
  TrendingUp,
} from "lucide-react";

import WelcomeBanner from "../../components/dashboard/WelcomeBanner";
import StatCard from "../../components/dashboard/StatCard";
import AnalyticsCard from "../../components/dashboard/AnalyticsCard";
import ProgressRing from "../../components/dashboard/ProgressRing";
import WeeklyActivity from "../../components/dashboard/WeeklyActivity";
import RecommendationSection from "../../components/dashboard/RecommendationSection";
import GoalsSection from "../../components/dashboard/GoalsSection";

function Dashboard() {
  const stats = [
    {
      title: "Career Score",
      value: "92%",
      icon: <Award size={32} />,
      description: "Excellent Progress",
    },
    {
      title: "Resume Score",
      value: "88%",
      icon: <FileText size={32} />,
      description: "ATS Optimized",
    },
    {
      title: "GitHub Health",
      value: "81%",
      icon: <GitBranch size={32} />,
      description: "Good Activity",
    },
    {
      title: "Weekly Progress",
      value: "76%",
      icon: <TrendingUp size={32} />,
      description: "Keep Going!",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-12">

        <WelcomeBanner />

        {/* Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
              description={stat.description}
            />
          ))}
        </div>

        {/* Analytics + Progress */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">

          <AnalyticsCard
            title="Resume Analysis"
            subtitle="Your resume was analyzed today. View detailed AI insights and suggestions."
            buttonText="View Details"
          />

          <ProgressRing
            percentage={76}
            label="Weekly Progress"
          />

        </div>

        {/* Weekly Activity */}
        <div className="mt-10">
          <WeeklyActivity />
        </div>

        {/* AI Recommendations */}
        <div className="mt-10">
          <RecommendationSection />
        </div>

        {/* Goals */}
        <div className="mt-10">
          <GoalsSection />
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
