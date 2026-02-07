import { Navigate, Outlet } from "react-router";

export const PrivateRoute = () => {
  const token = localStorage.getItem("token");
  const isToken = token !== null;

  if (!isToken) {
    return <Navigate to="registration" replace />;
  }

  return <Outlet />;
};
