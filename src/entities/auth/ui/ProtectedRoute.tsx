import { AppRoutes } from "@/shared/config";
import type { AppRoutesType } from "@/shared/config/appRoutes";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../model/useAuth";

interface ProtectedRouteProps {
    children: React.ReactNode;
    redirectTo?: AppRoutesType;
}

export function ProtectedRoute({
    children,
    redirectTo = AppRoutes.LOGIN,
}: ProtectedRouteProps) {
    const { data: isAuth, isFetching } = useAuth();
    const location = useLocation();

    if (isFetching) {
        return null;
    }

    if (!isAuth) {
        return <Navigate to={redirectTo} state={{ from: location }} replace />;
    }

    return children;
}
