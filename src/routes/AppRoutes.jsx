import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";
import { ROUTES } from "../utils/constants";

import EditProfile from "../pages/Profile/EditProfile";
import Profile from "../pages/Profile/Profile";
import Landing from "../pages/Landing/Landing";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import ResetPassword from "../pages/ResetPassword/ResetPassword";
import Dashboard from "../pages/Dashboard/Dashboard";
import DashboardLayout from "../layouts/DashboardLayout";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<Landing />} />

        <Route path={ROUTES.LOGIN} element={<Login />} />

        <Route path={ROUTES.SIGNUP} element={<Signup />} />

        <Route
          path={ROUTES.FORGOT_PASSWORD}
          element={<ForgotPassword />}
        />

        <Route
          path={ROUTES.RESET_PASSWORD}
          element={<ResetPassword />}
        />

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
          path={ROUTES.EDIT_PROFILE}
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <EditProfile />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;