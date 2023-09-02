import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { IRouteProtected } from "./RouteProtectedLogin";

export const RouteProtected:FC<IRouteProtected> = ({
  children,
  isAllowed,
  redirectTo = "/login",
}) => {
  if (!isAllowed) {
    return <Navigate to={redirectTo} />;
  }
  return children ? children : <Outlet />;
};