import {
  Award,
  FileText,
  GitBranch,
  TrendingUp,
} from "lucide-react";

import WelcomeBanner from "../../components/dashboard/WelcomeBanner";
import StatCard from "../../components/dashboard/StatCard";
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
    <div className="min-h-screen bg-gray-100 p-8">

      <WelcomeBanner />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

      <WeeklyActivity />

      <RecommendationSection />

      <GoalsSection />

    </div>
  );
}

export default Dashboard;