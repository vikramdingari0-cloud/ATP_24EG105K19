import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, allowedRoles }) {
  const { user, loading } = useContext(AuthContext);

  // ⏳ wait for auth check
  if (loading) return <h3>Loading...</h3>;

  // ❌ not logged in
  if (!user) return <Navigate to="/login" />;

  // ❌ role mismatch
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" />;
  }

  return children;
}