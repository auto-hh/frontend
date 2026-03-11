import type { RouteObject } from "react-router-dom";
import { Home } from "@/pages/Home";
import { AppRoutes } from "@/shared/config";
import { ProtectedRoute, PublicRoute } from "@/feature/auth";
import { Login } from "@/pages/Login";

export const routerConfig: RouteObject[] = [
    {
        path: AppRoutes.HOME,
        element: (
            <ProtectedRoute>
                <Home />
            </ProtectedRoute>
        ),
    },
    {
        path: AppRoutes.LOGIN,
        element: (
            <PublicRoute>
                <Login />
            </PublicRoute>
        ),
    },
];
