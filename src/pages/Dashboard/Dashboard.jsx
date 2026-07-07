import React from 'react';
import { useNavigate } from "react-router-dom";
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

export default function Dashboard() {
  const navigate = useNavigate();

  const stats = [
    {
      id: "stat-career",
      title: "Career Score",
      value: "92%",
      icon: <Award size={24} />, // Adjusted size slightly for better aesthetic proportion
      description: "Excellent Progress",
    },
    {
      id: "stat-resume",
      title: "Resume Score",
      value: "88%",
      icon: <FileText size={24} />,
      description: "ATS Optimized",
    },
    {
      id: "stat-github",
      title: "GitHub Health",
      value: "81%",
      icon: <GitBranch size={24} />,
      description: "Good Activity",
    },
    {
      id: "stat-weekly",
      title: "Weekly Progress",
      value: "76%",
      icon: <TrendingUp size={24} />,
      description: "Keep Going!",
    },
  ];

  // Action handlers connecting to the new functional props we built
  const handleResumeAnalysisClick = () => {
    console.log("Navigating to detailed resume breakdown view...");
    // You can replace this with your routing push or modal state toggles
  };

  const handleCreateAccountClick = () => {
    navigate("/signup");
  };

  return (
    <div className="container mx-auto px-4 py-6 space-y-8 max-w-7xl animate-fade-in">
      
      {/* 1. Welcome Header section */}
      <WelcomeBanner name="Muntaha" streakCount={5} />

      <div className="flex justify-end">
        <button
          type="button"
          onClick={handleCreateAccountClick}
          className="rounded-full bg-blue-600 px-5 py-2.5 font-semibold text-white shadow-lg transition duration-200 hover:bg-blue-700"
        >
          Create Account
        </button>
      </div>

      {/* 2. Top-tier Stat Metric Display Matrix */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <StatCard
            key={stat.id} // Fixed: String key prevents unnecessary UI layout shifts
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            description={stat.description}
          />
        ))}
      </section>

      {/* 3. Deep Dive Analytics & Dynamic Visual Tracking Elements */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        <div className="lg:col-span-2">
          <AnalyticsCard
            title="Resume Analysis"
            subtitle="Your resume was analyzed today. View detailed AI insights, keyword deficiencies, and direct formatting suggestions to boost visibility."
            buttonText="View Detailed Analysis"
            onButtonClick={handleResumeAnalysisClick}
          />
        </div>
        
        <div className="lg:col-span-1">
          <ProgressRing
            percentage={76}
            label="Weekly Target Progress"
          />
        </div>
      </section>

      {/* 4. Core Activity Performance Data Vector */}
      <section>
        <WeeklyActivity />
      </section>

      {/* 5. Bottom Layout Splitting: Dynamic AI Suggestions and Interactive Checklists */}
      <section className="grid grid-cols-1 xl:grid-cols-2 gap-6 items-start">
        <RecommendationSection />
        <GoalsSection />
      </section>
      
    </div>
  );
}