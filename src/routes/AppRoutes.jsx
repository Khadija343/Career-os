import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "../pages/Dashboard/Dashboard";
import Profile from "../pages/Profile/Profile";
import ResumeAnalysis from "../pages/ResumeAnalysis/ResumeAnalysis";
import GitHubAnalysis from "../pages/GitHubAnalysis/GitHubAnalysis";
import Roadmap from "../pages/Roadmap/Roadmap";
import ProgressTracker from "../pages/ProgressTracker/ProgressTracker";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing/Landing";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import ResetPassword from "../pages/ResetPassword/ResetPassword";
import Dashboard from "../pages/Dashboard/Dashboard";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/resume" element={<ResumeAnalysis />} />
        <Route path="/github" element={<GitHubAnalysis />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/progress" element={<ProgressTracker />} />
=======
        <Route path="/" element={<Landing />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />

        <Route
          path="/reset-password"
          element={<ResetPassword />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />
>>>>>>> origin/frontend-laiba
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;