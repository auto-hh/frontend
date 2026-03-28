import { AppRoutes } from "@/shared/config";
import type { AppRoutesType } from "@/shared/config/appRoutes";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../model/useAuth";

interface PublicRouteProps {
    children: React.ReactNode;
    redirectTo?: AppRoutesType;
}

export function PublicRoute({
    children,
    redirectTo = AppRoutes.HOME,
}: PublicRouteProps) {
    const { data: isAuth, isFetching } = useAuth();
    const location = useLocation();

    if (isFetching) {
        return null;
    }

    if (isAuth) {
        return <Navigate to={redirectTo} state={{ from: location }} replace />;
    }

    return children;
}
