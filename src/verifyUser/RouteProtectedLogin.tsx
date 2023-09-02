import { FC, ReactComponentElement } from "react";
import { Navigate, Outlet } from "react-router-dom";

export interface IRouteProtected {
  children?: ReactComponentElement<any>,
  isAllowed: boolean,
  redirectTo: string
}


export const RouteProtectedLogin: FC<IRouteProtected> = ({
  children,
  isAllowed,
  redirectTo = "/user",
}) => {
  if (isAllowed) {
    return <Navigate to={redirectTo} />;
  }
  return children ? children : <Outlet />;
};