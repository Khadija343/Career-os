import { useContext } from "react";
import { Navigate } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";
import { ROUTES } from "../utils/constants";

function PublicRoute({ children }) {
  const { user } = useContext(AuthContext);

  if (user) {
    return <Navigate to={ROUTES.DASHBOARD} replace />;
  }

  return children;
}

export default PublicRoute;
