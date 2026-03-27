import type { RouteObject } from "react-router-dom";
import { Home } from "@/pages/Home";
import { AppRoutes } from "@/shared/config";
import { ProtectedRoute, PublicRoute } from "@/features/auth";
import { Login } from "@/pages/Login";
import { Analysis } from "@/pages/Analysis";
import { Profile } from "@/pages/Profile";

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
    {
        path: AppRoutes.ANALYSIS,
        element: (
            <ProtectedRoute>
                <Analysis />
            </ProtectedRoute>
        ),
    },
    {
        path: AppRoutes.PROFILE,
        element: (
            <ProtectedRoute>
                <Profile />
            </ProtectedRoute>
        ),
    },
];
