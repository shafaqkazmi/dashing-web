import { Navigate, Outlet } from "react-router-dom";
import { useIsAuthorized } from "../hooks/use-is-authorized";
import { Api } from "../api/url";

export const ProtectedRoutes = () => {
  const { isAuthorized } = useIsAuthorized();

  return isAuthorized ? <Outlet /> : <Navigate to={Api.Default} />;
};
