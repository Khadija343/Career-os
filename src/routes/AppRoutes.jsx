import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard/Dashboard";
import Profile from "../pages/Profile/Profile";
import ResumeAnalysis from "../pages/ResumeAnalysis/ResumeAnalysis";
import GitHubAnalysis from "../pages/GitHubAnalysis/GitHubAnalysis";
import Roadmap from "../pages/Roadmap/Roadmap";
import ProgressTracker from "../pages/ProgressTracker/ProgressTracker";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/resume" element={<ResumeAnalysis />} />
        <Route path="/github" element={<GitHubAnalysis />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/progress" element={<ProgressTracker />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;