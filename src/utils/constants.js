export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  SIGNUP: "/signup",
  FORGOT_PASSWORD: "/forgot-password",
  RESET_PASSWORD: "/reset-password",
  DASHBOARD: "/dashboard",
  PROFILE: "/profile",
  RESUME: "/resume",
  GITHUB: "/github",
  ROADMAP: "/roadmap",
  PROGRESS: "/progress",
};

// Suppose later the team decides to change:
// /dashboard
// to
// /home

// Without constants, you'd have to search and replace it everywhere.

// With constants, you only change:
// export const ROUTES = {
//   DASHBOARD: "/home",
// };
// and every page automatically uses the new path.
