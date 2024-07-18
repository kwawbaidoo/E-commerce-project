import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, isAdmin }) {
  if (!isAdmin) {
    // If not admin, redirect to the login page
    return <Navigate to="/login" />;
  }

  // If admin, render the requested component
  return children;
}

export default ProtectedRoute;