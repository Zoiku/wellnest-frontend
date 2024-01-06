import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ fallback }) => {
  const { auth } = useAuth();
  return auth ? <Outlet /> : <Navigate to={fallback} />;
};

export default RequireAuth;
