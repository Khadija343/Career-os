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
      value: 92,
      icon: <Award size={22} />,
      description: "Excellent Progress",
    },
    {
      title: "Resume Score",
      value: 88,
      icon: <FileText size={22} />,
      description: "ATS Optimized",
    },
    {
      title: "GitHub Health",
      value: 81,
      icon: <GitBranch size={22} />,
      description: "Good Activity",
    },
    {
      title: "Weekly Progress",
      value: 76,
      icon: <TrendingUp size={22} />,
      description: "Keep Going!",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl space-y-8 px-6 py-8 lg:px-8 lg:py-12">

        <WelcomeBanner />

        {/* Stat Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
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
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

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
        <WeeklyActivity />

        {/* AI Recommendations */}
        <RecommendationSection />

        {/* Goals */}
        <GoalsSection />

      </div>
    </div>
  );
}

export default Dashboard;
