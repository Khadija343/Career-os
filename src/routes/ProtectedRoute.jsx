import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
    //The replace prop means the browser replaces the 
    // current history entry, so pressing the Back button 
    // won't take the user back to the protected page.
  }

  return children;
}

export default ProtectedRoute;