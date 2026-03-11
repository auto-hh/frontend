import { useAuthStore } from "@/entities/auth";
import { AppRoutes } from "@/shared/config";
import type { AppRoutesType } from "@/shared/config/appRoutes";
import { Navigate, useLocation } from "react-router-dom";

interface PublicRouteProps {
    children: React.ReactNode;
    redirectTo?: AppRoutesType;
}

export function PublicRoute({
    children,
    redirectTo = AppRoutes.HOME,
}: PublicRouteProps) {
    const isAuth = useAuthStore((state) => state.isAuth);
    const location = useLocation();

    if (isAuth) {
        return <Navigate to={redirectTo} state={{ from: location }} replace />;
    }

    return children;
}
