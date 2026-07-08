import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import { ROUTES } from "../utils/constants";

import DashboardLayout from "../layouts/DashboardLayout";

import Landing from "../pages/Landing/Landing";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import ResetPassword from "../pages/ResetPassword/ResetPassword";

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
        {/* Public Routes */}
        <Route path={ROUTES.HOME} element={<Landing />} />

        <Route
          path={ROUTES.LOGIN}
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        <Route
          path={ROUTES.SIGNUP}
          element={
            <PublicRoute>
              <Signup />
            </PublicRoute>
          }
        />

        <Route
          path={ROUTES.FORGOT_PASSWORD}
          element={
            <PublicRoute>
              <ForgotPassword />
            </PublicRoute>
          }
        />

        <Route
          path={ROUTES.RESET_PASSWORD}
          element={
            <PublicRoute>
              <ResetPassword />
            </PublicRoute>
          }
        />

        {/* Protected Dashboard & Application Routes */}
        <Route
          path={ROUTES.DASHBOARD}
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path={ROUTES.PROFILE}
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Profile />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path={ROUTES.RESUME}
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <ResumeAnalysis />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path={ROUTES.GITHUB}
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <GitHubAnalysis />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path={ROUTES.ROADMAP}
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Roadmap />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path={ROUTES.PROGRESS}
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <ProgressTracker />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        {/* Unknown Route */}
        <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
