import type { RouteObject } from "react-router-dom";
import { Home } from "@/pages/Home";
import { Login } from "@/pages/Login";
import { AppRoutes } from "@/shared/config";
import { withAuth } from "@/feature/auth";

const ProtectedHome = withAuth(Home, true, AppRoutes.LOGIN);
const PublicLogin = withAuth(Login, false, AppRoutes.HOME);

export const routerConfig: RouteObject[] = [
    {
        path: AppRoutes.HOME,
        element: <ProtectedHome />,
    },
    {
        path: AppRoutes.LOGIN,
        element: <PublicLogin />,
    },
];
